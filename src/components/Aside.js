import React from "react";

const Aside = ({
  paraLength,
  wordFoundNo,
  contents,
  excludedWords,
  topWords,
}) => {
  return (
    <aside>
      <section>
        <h4>Words used:</h4>
        <p>{paraLength} words</p>
      </section>
      <section>
        <h4>{`Found: ${wordFoundNo.word}`}</h4>
        {contents !== "" ? (
          <p>
            {wordFoundNo.num} time{wordFoundNo.num !== 1 ? "s" : ""}
          </p>
        ) : (
          <></>
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
          {topWords.length > 0 ? (
            topWords.map((top) => (
              <li>
                <p>{top[0]}: </p>
                <p>{top[1]}</p>
              </li>
            ))
          ) : (
            <></>
          )}
        </ul>
      </section>
    </aside>
  );
};

export default Aside;
