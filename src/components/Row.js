import React from "react";

const Row = ({ content }) => {
  // const wordCount = content.split(" ").lenght;

  return (
    <section>
      <p>{content}</p>
      {/* <p>{`Words used: ${wordCount > 0 ? wordCount : 0}`}</p> */}
    </section>
  );
};

export default Row;
