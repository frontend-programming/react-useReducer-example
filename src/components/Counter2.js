import React, { useReducer } from "react";

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  if (action.type == "INCREMENT") {
    return {
      ...state,
      count: state.count + action.payload,
    };
  }
  if (action.type == "DECREMENT") {
    return {
      ...state,
      count: state.count - 1,
    };
  }
};

export default function Counter2(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

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
        <span className="count-value">{state.count}</span>
        <button
          className="increment"
          onClick={() => dispatch({ type: "INCREMENT", payload: 5 })}
        >
          +
        </button>
      </div>
    </div>
  );
}
