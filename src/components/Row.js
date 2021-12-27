import React from "react";

const Row = ({ content }) => {
  return (
    <section>
      <p>{content}</p>
      <p>{`Words used: ${content.split(" ").lenght}`}</p>
    </section>
  );
};

export default Row;
