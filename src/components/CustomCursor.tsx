import * as React from "react";

import "external-svg-loader";
import { useMousePosition } from "../hooks/useMousePosition";
import { isTouchDevice } from "../utils/device";
import { Style } from "react-style-tag";

const imgIcon = require("./icons/icon.png");
const svgIcon = require("./icons/icon.svg");

export const CustomCursor = () => {
  const { x, y } = useMousePosition();

  const showCursor = !isTouchDevice && x && y;

  if (showCursor) {
    const cursorStyles: React.CSSProperties = {
      position: "absolute",
      pointerEvents: "none",
      width: "50px",
      height: "50px",
      transform: "translate(-50%, -50%)",
      left: `${x}px`,
      top: `${y}px`,
    };
    return (
      <div>
        <Style>{"*{cursor: none !important;}"}</Style>
        <div
          className="dt-custom-cursor-container"
          style={{
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 2147483647,
            pointerEvents: "none",
          }}
        >
          {/* @ts-ignore */}
          {/* <svg data-src={svgIcon} className="cursor-el" style={cursorStyles} /> */}

          {/* @ts-ignore */}
          <img src={imgIcon} className="cursor-el" style={cursorStyles} />
        </div>
      </div>
    );
  } else {
    return null;
  }
};
