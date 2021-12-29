import { useState } from "react";
import Input from "./components/Input";
import Table from "./components/Table";
import "./App.css";

const App = () => {
  const [category, setCategory] = useState({id: 1, text: "uncatagorised"});
  const [content, setContent] = useState({});
  const [searchWord, setSearchWord] = useState("");
  const [text, setText] = useState("");

  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Text Analysis</h1>
        <p>
          A program used to assess body of text and cargorise it based on
          categories set.
        </p>
      </header>
      <form>
        <Input
          item={category}
          setItem={setCategory}
          placeholder={"Category.."}
        />
        <div>
          <textarea
            placeholder="Input some text to be assesed"
            onKeyUp={(e) =>
              setText({
                ...content,
                id: content.length + 1,
                data: text
              })
            }
          />
          <button onClick={(e) => setContent(text)}>GO</button>
        </div>
        <Input
          item={searchWord}
          setItem={setSearchWord}
          placeholder={"Search word.."}
        />
      </form>
      <Table content={content} category={category} />
    </div>
  );
};

export default App;
