import React from "react";

const Input = ({ placehold, val, changeFn, clickFn, btnName }) => {
  const clicked = (e) => {
    e.preventDefault();
    clickFn(e);
    changeFn("");
  };

  return (
    <>
      <input
        type="text"
        placeholder={placehold}
        value={val}
        onChange={(e) => changeFn(e.target.value.replace(/[^a-zA-Z]/gi, ""))}
      />
      <button onClick={(e) => clicked(e)}>{btnName}</button>
    </>
  );
};

export default Input;
