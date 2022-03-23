import { useState, useEffect } from "react";
import "./App.scss";
import Table from "./components/Table";
import Input from "./components/Input";

const App = () => {
  //form controls
  const [contents, setContents] = useState("");
  const [wordToExclude, setWordToExclude] = useState("");
  const [wordToFind, setWordToFind] = useState("");

  const [err, setErr] = useState("");
  const [excludedWords, setExcludedWords] = useState(["a", "the", "and", "an"]);
  const [wordFoundNo, setWordFoundNo] = useState({ word: "", num: 0 });

  useEffect(() => {
    return setTimeout(() => {
      setErr("");
    }, 3000);
  }, [err]);

  const addToExclusions = (e) => {
    e.preventDefault();
    const wordExists = excludedWords.find(
      (c) => c.toLowerCase() === wordToExclude.toLowerCase()
    );
    if (wordToExclude === "") setErr("Please enter a word");
    else
      !wordExists
        ? setExcludedWords([
            ...excludedWords,
            wordToExclude.trim().toLowerCase(),
          ])
        : setErr("Word all ready added");
    setWordToExclude("");
  };

  const searchForWord = (e) => {
    e.preventDefault();
    if (contents.length <= 15) setErr("Please enter more text to assess");
    else if (wordToFind === "") setErr("Please enter a word");
    else {
      const n = contents.split(" ").reduce((arr, current) => {
        const curr = current
          .replace(/[^a-zA-Z]/gi, "")
          .trim()
          .toLowerCase();
        return wordToFind === curr ? (arr += 1) : arr;
      }, 0);
      setWordFoundNo({ word: wordToFind, num: n });
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Text Analysis</h1>
        <p className="error">{err}</p>
      </header>
      <form className="inputs">
        {contents.length >= 15 && (
          <Input
            placehold="Exclude word.."
            val={wordToExclude}
            changeFn={setWordToExclude}
            clickFn={addToExclusions}
            btnName="Remove"
          />
        )}
        {contents.length >= 15 && (
          <Input
            placehold="Find word.."
            val={wordToFind}
            changeFn={setWordToFind}
            clickFn={searchForWord}
            btnName="Find"
          />
        )}
      </form>
      <Table
        excludedWords={excludedWords}
        setExcludedWords={setExcludedWords}
        wordFoundNo={wordFoundNo}
        contents={contents}
        setContents={setContents}
      />
    </div>
  );
};

export default App;
