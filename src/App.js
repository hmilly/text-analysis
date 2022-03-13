import { useState, useEffect } from "react";
import Table from "./components/Table";
import "./App.scss";

const App = () => {
  const [excludedWords, setExcludedWords] = useState(["a", "the", "and", "an"]);
  const [topWords, setTopWords] = useState([["the", 1]]);
  const [contents, setContents] = useState("");

  const [word, setWord] = useState("");
  const [text, setText] = useState("");
  const [err, setErr] = useState("");

  useEffect(() => {
    return setTimeout(() => {
      setErr("");
    }, 3000);
  }, [err]);

  const addExcludedWords = (e) => {
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

  // you are here hun
  const addTopWords = (e) => {
    e.preventDefault();

    // set tally for top 5 words used !
    contents;
  };
  // you are here hun

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
        <p className="error">{err}</p>
      </header>
      <form>
        <textarea
          placeholder="Input main text.."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={(e) => assessText(e)}>Go</button>
        <div className="inputs">
          <input
            type="text"
            placeholder="Exclude.."
            value={word}
            onChange={(e) => setWord(e.target.value.replace(/[^a-zA-Z]/gi, ""))}
          />
          <button onClick={(e) => addExcludedWords(e)}>Add</button>
          <input
            type="text"
            placeholder="Find.."
            value={word}
            onChange={(e) => setWord(e.target.value.replace(/[^a-zA-Z]/gi, ""))}
          />
          <button onClick={(e) => addTopWords(e)}>Find</button>
        </div>
      </form>
      <Table
        excludedWords={excludedWords}
        contents={contents}
        topWords={topWords}
      />
    </div>
  );
};

export default App;
