import { useState, useEffect } from "react";
import Table from "./components/Table";
import "./App.scss";

const App = () => {
  const [excludedWords, setExcludedWords] = useState(["a", "the", "and", "an"]);
  const [contents, setContents] = useState("");

  const [word, setWord] = useState("");
  const [text, setText] = useState("");
  const [err, setErr] = useState("");

  useEffect(() => {
    return setTimeout(() => {
      setErr("");
    }, 3000);
  }, [err]);

  const addWords = (e) => {
    e.preventDefault();
    const wordExists = excludedWords.find(
      (c) => c.toLowerCase() === word.toLowerCase()
    );

    if (word === "") setErr("Please enter a word");
    else
      !wordExists
        ? setExcludedWords([...excludedWords, word.trim().toLowerCase()])
        : setErr("Word all ready added");
    setWord("");
  };

  const assessText = (e) => {
    e.preventDefault();
    if (text === "") setErr("Please enter some text");
    else text !== contents ? setContents(text) : setErr("Text all ready added");
    setText("");
  };

  return (
    <div className="App">
      <header>
        <h1>Text Analysis</h1>
        <p>An app for assessing a body of text.</p>
        <h2 className="error">{err}</h2>
      </header>
      <form>
        <textarea
          placeholder="Input text to be assesed.."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={(e) => assessText(e)}>GO</button>
        <input
          type="text"
          placeholder="Words to be excluded from the search.."
          value={word}
          onChange={(e) => setWord(e.target.value.replace(/[^a-zA-Z]/gi, ""))}
        />
        <button onClick={(e) => addWords(e)}>GO</button>
      </form>
      <Table excludedWords={excludedWords} contents={contents} />
    </div>
  );
};

export default App;
