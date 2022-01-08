import { useState, useEffect } from "react";

const Table = ({ excludedWords, contents }) => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    // const n = contents.split(" ").filter((x) => x ===
    // ).length;
    // setNum(n);
  }, [excludedWords, contents]);

  return (
    <div>
      <p className="contents">{contents}</p>
      <section>
        <h4>Words used: </h4>
        <p>{contents ? contents.split(" ").length : 0}</p>
        <h4>{`Found times: `}</h4>
        <p>{num}</p>
        <h4>Excluded words:</h4>
        <ul>
          {excludedWords.map((ex, i) =>
            i !== excludedWords.length - 1 ? <li>{ex}, </li> : <li>{ex}</li>
          )}
        </ul>
      </section>
    </div>
  );
};

export default Table;
