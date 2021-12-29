import { useState } from "react";

const Input = ({ item, setItem, placeholder }) => {

  


  const [input, setInput] = useState("");

  return (
    <div>
      <input placeholder={placeholder} onKeyUp={(e) => setInput(e.value)} />
      <button
        onClick={(e) =>
          setItem({
            ...item,
            id: item.length + 1,
            data: input,
          })
        }
      >
        GO
      </button>
    </div>
  );
};

export default Input;
