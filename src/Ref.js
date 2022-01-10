import React, { useRef } from "react";

export const RefHook = () => {
  const mySpan = useRef("Dick");

  const buttonClicked = () => {
    mySpan.current.innerText =
      mySpan.current.innerText === "Cunt" ? "Dick" : "Cunt";
    console.log(mySpan.current.innerText);
  };

  return (
    <div>
      <button onClick={buttonClicked}>My Button</button>
      <span ref={mySpan}>Dick</span>
    </div>
  );
};
