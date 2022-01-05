import { useState, useEffect } from "react";
import Table from "./components/Table";
import "./App.scss";

const App = () => {
  const [categories, setCategories] = useState([]);
  const [contentsArr, setContentsArr] = useState([]);

  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [err, setErr] = useState("");

  useEffect(() => {
    return setTimeout(() => {
      setErr("");
    }, 3000);
  }, [err]);

  const findCat = (e) => {
    e.preventDefault();
    const catExists = categories.find(
      (c) => c.toLowerCase() === category.toLowerCase()
    );
    if (category === "") setErr("Please enter a category");
    else
      !catExists
        ? setCategories([...categories, category])
        : setErr("Category all ready set");
    setCategory("");
  };

  const findContent = (e) => {
    e.preventDefault();
    const contExists = contentsArr.find((c) => c === content);
    if (content === "") setErr("Please enter some contents");
    else
      !contExists
        ? setContentsArr([...contentsArr, content])
        : setErr("contentsArr all ready added");
    setContent("");
  };

  return (
    <div className="App">
      <header>
        <h1>contents Analysis</h1>
        <p>
          A program used to assess body of contents and cargorise it based on
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
          placeholder="Input some contents to be assesed"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button onClick={(e) => findContent(e)}>GO</button>
      </form>
      <Table categories={categories} contents={contentsArr} />
    </div>
  );
};

export default App;
