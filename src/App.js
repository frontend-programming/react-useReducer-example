import React from "react";
import { ChangeColor, Counter, Users } from "./components";
import { useAppReducer } from "./reducers/appReducers";

function App(props) {
  const [state, dispatch] = useAppReducer();

  return (
    <div>
      <Counter state={state} dispatch={dispatch} />
      <ChangeColor state={state} dispatch={dispatch} />
      <Users state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
