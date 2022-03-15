import { useState, useEffect } from "react";

const Table = ({
  excludedWords,
  numWordFound,
  findWord,
  contents,
  setContents,
}) => {
  //start here again
  const assessText = (e) => {
    e.preventDefault();

    if (contents !== "") {
      // set tally for top 5 words used !
      const popular = contents.split(" ").reduce((acc, curr) => {
        let item = curr
          .replace(/[^a-zA-Z]/gi, "")
          .trim()
          .toLowerCase();

        acc[item] ? (acc[item] = acc[item] + 1) : (acc[item] = 1);

        return acc;
      }, {});

      console.log(popular);
    }
  };
  //start here again

  const calculateLength = () => {
    let n = contents.split(" ").filter((word) => !excludedWords.includes(word));
    let rmChar = n.join(" ").replace(/[^A-Za-z]\s+/g, " ");
    let newWord = rmChar.trim().split(" ");
    return newWord.length;
  };

  return (
    <div className="table">
      <form className="text">
        <textarea
          placeholder="Input main text.."
          value={contents}
          onChange={(e) => setContents(e.target.value)}
        />
        <button onClick={(e) => setContents("")}>Clear</button>
      </form>
      <aside className="sideBar">
        <section>
          <p>{`Words used: `}</p>
          {contents.length >= 15 && <p>{calculateLength()} words</p>}
        </section>
        <section>
          <p>{`Found word: `}</p>
          {contents.length >= 15 && findWord.length > 0 && (
            <p>
              {numWordFound} time{numWordFound !== 1 ? "s" : ""}
            </p>
          )}
        </section>
        <section>
          <p>Excluded from count:</p>
          <ul>
            {excludedWords.map((ex, i) =>
              i !== excludedWords.length - 1 ? <li>{ex}, </li> : <li>{ex}.</li>
            )}
          </ul>
        </section>
        <section>
          <p>Top words:</p>
          <ul>
            {/* {topWords.map((top) => (
              <li>
                <p>{top[0]}</p>
                <p>{top[1]}</p>
              </li>
            ))} */}
          </ul>
        </section>
      </aside>
    </div>
  );
};

export default Table;
