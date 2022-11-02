import * as React from "react";

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = React.useState({
    x: null,
    y: null,
  });

  React.useEffect(() => {
    const mouseMoveHandler = (event: { clientX: number; clientY: number }) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    };
    document.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return mousePosition;
};
