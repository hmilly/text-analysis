import { useState, useEffect } from "react";
import "./App.scss";
import Table from "./components/Table";
import Input from "./components/Input";

const App = () => {
  const [contents, setContents] = useState("");
  const [numWordFound, setNumWordFound] = useState(0);
  const [findWord, setFindWord] = useState("");
  const [excludedWords, setExcludedWords] = useState(["a", "the", "and", "an"]);
  const [exWord, setExWord] = useState("");
  const [err, setErr] = useState("");

  useEffect(() => {
    return setTimeout(() => {
      setErr("");
    }, 3000);
  }, [err]);

  const addToExclusions = (e) => {
    e.preventDefault();
    const wordExists = excludedWords.find(
      (c) => c.toLowerCase() === exWord.toLowerCase()
    );
    if (exWord === "") setErr("Please enter a word");
    else
      !wordExists
        ? setExcludedWords([...excludedWords, exWord.trim().toLowerCase()])
        : setErr("Word all ready added");
    setExWord("");
  };

  const searchForWord = (e) => {
    e.preventDefault();
    if (contents === "") setErr("Please enter some content");
    else if (findWord === "") setErr("Please enter a word");
    else {
      const n = contents.split(" ").reduce((acc, current) => {
        const c = current
          .replace(/[^a-zA-Z]/gi, "")
          .trim()
          .toLowerCase();
        return findWord === c ? (acc += 1) : acc;
      }, 0);
      setNumWordFound(n);
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
            phTxt="Exclude word.."
            val={exWord}
            changeFn={setExWord}
            clickFn={addToExclusions}
            btn="Add"
          />
        )}
        {contents.length >= 15 && (
          <Input
            phTxt="Find word.."
            val={findWord}
            changeFn={setFindWord}
            clickFn={searchForWord}
            btn="Find"
          />
        )}
      </form>
      <Table
        excludedWords={excludedWords}
        numWordFound={numWordFound}
        findWord={findWord}
        contents={contents}
        setContents={setContents}
      />
    </div>
  );
};

export default App;
