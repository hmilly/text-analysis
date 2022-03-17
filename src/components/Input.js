import React from "react";

const Input = ({ phTxt, val, changeFn, clickFn, btn }) => {
  const clicked = (e) => {
    e.preventDefault();
    clickFn(e);
    changeFn("");
  };

  return (
    <>
      <input
        type="text"
        placeholder={phTxt}
        value={val}
        onChange={(e) => changeFn(e.target.value.replace(/[^a-zA-Z]/gi, ""))}
      />
      <button onClick={(e) => clicked(e)}>{btn}</button>
    </>
  );
};

export default Input;
