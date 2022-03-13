import { useState, useEffect } from "react";

const Table = ({ excludedWords, contents, topWords }) => {
  const [num, setNum] = useState(0);

  // you are here hun
  useEffect(() => {
    // const n = contents.split(" ").filter((x) => x === excludedWords).length;
    setNum(n);
  }, [excludedWords, contents]);
  // you are here hun

  return (
    <div className="table">
      <div className="contents">
        <p>{contents}</p>
      </div>
      <div className="sideBar">
        <section>
          <p>{`Words used: `}</p>
          <p>{contents ? contents.split(" ").length : 0} words</p>
        </section>
        <section>
          <p>{`Found: `}</p>
          <p>{num} times</p>
        </section>
        <section>
          <p>Excluded words:</p>
          <ul>
            {excludedWords.map((ex, i) =>
              i !== excludedWords.length - 1 ? <li>{ex}, </li> : <li>{ex}.</li>
            )}
          </ul>
        </section>
        <section>
          <p>Top words:</p>
          <ul>
            {topWords.map((top) => (
              <li>
                <p>{top[0]}</p>
                <p>{top[1]}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Table;
