import { useState } from "react";
import Table from "./components/Table";
import "./App.css";

const App = () => {
  const [obj, setObj] = useState([
    { category: "Undefined", content: ["hello", "nice to meet you"] },
  ]);

  const [category, setCategory] = useState("");
  const [text, setText] = useState("");

  const [err, setErr] = useState("");

  const findCat = (e) => {
    e.preventDefault();
    const catExists = obj.find(
      (c) => c.category.toLowerCase() === category.toLowerCase()
    );

    !catExists
      ? setObj([...obj, { category: category, content: [] }])
      : setErr("Category all ready set");
  };

  const findTxt = (e) => {
    e.preventDefault();
    const matched = obj.find((o) => o.category.match(text));

    console.log(matched);

    matched
      ? setObj([...obj, { ...matched, content: [...matched.content, text] }])
      : setErr("text not found.");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Text Analysis</h1>
        <p>
          A program used to assess body of text and cargorise it based on
          categories set.
        </p>
        <p>{err}</p>
      </header>
      <form>
        <div>
          <input
            placeholder="Input a category..."
            onKeyUp={(e) => setCategory(e.target.value)}
          />
          <button onClick={(e) => findCat(e)}>GO</button>
        </div>
        <div>
          <textarea
            placeholder="Input some text to be assesed"
            onKeyUp={(e) => setText(e.target.value)}
          />
          <button onClick={(e) => findTxt(e)}>GO</button>
        </div>
      </form>
      <Table obj={obj} />
    </div>
  );
};

export default App;
