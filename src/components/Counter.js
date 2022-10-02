import React from "react";

export default function Counter(props) {
  const { state, dispatch } = props;
  const { count } = state;

  return (
    <div className="app-block">
      <h1>Counter App</h1>
      <div>
        <button
          className="decrement"
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          -
        </button>
        <span className="count-value">
          {count > 0 && count < 10 && 0}
          {count}
        </span>
        <button
          className="increment"
          onClick={() => dispatch({ type: "INCREMENT", payload: 2 })}
        >
          +
        </button>
      </div>
    </div>
  );
}
