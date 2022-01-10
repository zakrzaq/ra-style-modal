import React from "react";
import State from "./State";
import { RefHook } from "./Ref";
import { ReducerHook } from "./ReducerHook";

const App = () => {
  return (
    <>
      <State />
      <RefHook />
      <RefHook />
      <RefHook />
      <ReducerHook />
    </>
  );
};

export default App;
