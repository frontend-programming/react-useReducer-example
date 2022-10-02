import React from "react";

export default function ChangeColor(props) {
  const { state, dispatch } = props;
  const { color } = state;

  return (
    <div className="app-block">
      <h1>Change Color App</h1>
      <div className="change-color">
        <div className="color-box" style={{ backgroundColor: color }}></div>
        <button
          className="change-color-btn"
          onClick={() => dispatch({ type: "CHANGE_COLOR" })}
        >
          Change Color
        </button>
      </div>
    </div>
  );
}
