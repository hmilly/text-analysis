import { useState } from "react";

const Form = ({ content, setContent, category, setCategory,searchWord }) => {
  const [input, setInput] = useState("");
  const [text, setText] = useState("");

  return (
    <div className="Form">
      <div>
        <input placeholder="Category.." onKeyUp={(e) => setInput(e.value)} />
        <button
          onClick={setCategory({
            ...category,
            id: category.length + 1,
            data: input,
          })}
        >
          GO
        </button>
      </div>
      <div>
        <textarea
          placeholder="Input some text to be assesed"
          onKeyUp={(e) =>
            setText({
              ...content,
              id: content.length + 1,
              data: text,
            })
          }
        />
        <button onClick={setContent(text)}>GO</button>
      </div>
      <div>
        <input placeholder="Search word.." onKeyUp={(e) => setSearchWord(e.value)} />
        <button
          onClick={
            
          }
        >
          GO
        </button>
      </div>
    </div>
  );
};

export default Form;
