import * as React from "react";

// @ts-ignore
export default function GridPlaylist({ playlistData }) {
  return (
    <div className="grid-container">
      {/* @ts-ignore */}
      {playlistData.map((item) => (
        <div key={item.id} className="grid-container__item">
          <div>
            {/* @ts-ignore */}
            <img src={item.thumb} width="100%" />
          </div>
          <div className="title">{item.title}</div>
          <div>{item.artist}</div>
          <div>{item.released}</div>
          <div className="lyrics">{item.description}</div>
        </div>
      ))}
    </div>
  );
}
