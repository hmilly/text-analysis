import { useState } from "react";
import Table from "./components/Table";
import "./App.scss";

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
    setCategory("");
  };

  const findTxt = (e) => {

    e.preventDefault();
    let arr = obj;

    arr.map((o) => {
      if (text.toLowerCase().includes(o.category.toLowerCase())) {
        o.content.push(text);
      } 
    });
    setObj(arr);
    setText("");
  };

  return (
    <div className="App">
      <header>
        <h1>Text Analysis</h1>
        <p>
          A program used to assess body of text and cargorise it based on
          categories set.
        </p>
        <h2 className="error">{err}</h2>
      </header>
      <form>
        <input
          placeholder="Input a category..."
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button onClick={(e) => findCat(e)}>GO</button>
        <textarea
          placeholder="Input some text to be assesed"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={(e) => findTxt(e)}>GO</button>
      </form>
      <Table obj={obj} />
    </div>
  );
};

export default App;
