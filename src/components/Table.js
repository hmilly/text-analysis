import { useState, useEffect } from "react";

const Table = ({
  excludedWords,
  setExcludedWords,
  wordFoundNo,
  contents,
  setContents,
}) => {
  const [topWords, setTopWords] = useState({});
  const [paraLength, setParaLength] = useState(0);

  const calculateLength = () => {
    let n = contents.split(" ").filter((word) => !excludedWords.includes(word));
    let rmChar = n.join(" ").replace(/[^A-Za-z]\s+/g, " ");
    let newWord = rmChar.trim().split(" ");
    setParaLength(newWord.length);
  };

  const assessText = () => {
    const popular = contents.split(" ").reduce((all, curr) => {
      let item = curr
        .replace(/[^a-zA-Z]/gi, "")
        .trim()
        .toLowerCase();

      if (excludedWords.includes(item) || item.length === 0) {
        all[item] = 0;
      } else if (all[item]) {
        all[item]++;
      } else {
        all[item] = 1;
      }
      console.log(all);
      return all;
    }, {});

    const sortedArr = Object.entries(popular).sort((a, b) => b[1] - a[1]);
    setTopWords(sortedArr.slice(0, 5));
  };

  useEffect(() => {
    if (contents.length > 15) {
      calculateLength();
      assessText();
    }
  }, [contents, excludedWords]);

  const clearData = (e) => {
    e.preventDefault();
    setContents("");
    setExcludedWords([]);
    setParaLength(0);
    setTopWords({});
  };

  return (
    <div className="table">
      <form className="text-area">
        <textarea
          placeholder="Input main text.."
          value={contents}
          onChange={(e) => setContents(e.target.value)}
        />
        <button onClick={(e) => clearData(e)}>Clear</button>
      </form>
      <aside>
        <section>
          <h4>Words used:</h4>
          <p>{paraLength} words</p>
        </section>
        <section>
          <h4>{`Found: ${wordFoundNo.word}`}</h4>
          {contents !== "" && (
            <p>
              {wordFoundNo.num} time{wordFoundNo.num !== 1 ? "s" : ""}
            </p>
          )}
        </section>
        <section>
          <h4>Excluded from count:</h4>
          <ul>
            {excludedWords.map((word, i) =>
              i !== excludedWords.length - 1 ? (
                <li>
                  <p>{word}, </p>
                </li>
              ) : (
                <li>
                  <p>{word}.</p>
                </li>
              )
            )}
          </ul>
        </section>
        <section>
          <h4>Top words:</h4>
          <ul className="topwords">
            {topWords.length > 0 &&
              topWords.map((top) => (
                <li>
                  <p>{top[0]}: </p>
                  <p>{top[1]}</p>
                </li>
              ))}
          </ul>
        </section>
      </aside>
    </div>
  );
};

export default Table;
