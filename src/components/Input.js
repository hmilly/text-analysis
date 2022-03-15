import React from "react";

const Input = ({ phTxt, val, changeFn, clickFn, btn }) => {
  return (
    <>
      <input
        type="text"
        placeholder={phTxt}
        value={val}
        onChange={(e) => changeFn(e.target.value.replace(/[^a-zA-Z]/gi, ""))}
      />
      <button onClick={(e) => clickFn(e)}>{btn}</button>
    </>
  );
};

export default Input;
