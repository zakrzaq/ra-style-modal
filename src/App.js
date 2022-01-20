import React from "react";
// import "./App.css";
import Modal from "./components/Modal";
import useModal from "./services/hooks/useModal";

const App = () => {
  const { isShowing, toggle } = useModal();
  return (
    <div className="App">
      <button className="button-default" onClick={toggle}>
        Show Modal
      </button>
      <Modal
        isShowing={isShowing}
        hide={toggle}
        header={"Judy is awesome"}
        content={"Some text here"}
      />
    </div>
  );
};

export default App;
