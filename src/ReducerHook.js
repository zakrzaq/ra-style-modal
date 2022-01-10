import React, { useReducer } from "react";

function myReducer(state, action) {
  switch (action.type) {
    case "decrement":
      return state - 1;
    case "increment":
      return state + 1;
    default:
      throw new Error();
  }
}

export const ReducerHook = () => {
  const [state, dispatch] = useReducer(myReducer, 0);
  return (
    <div>
      Count: {state}
      <button onClick={() => dispatch({ type: "decrement" })}> - </button>
      <button onClick={() => dispatch({ type: "increment" })}> + </button>
    </div>
  );
};
