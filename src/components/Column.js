import { useEffect } from "react";
import Row from "./Row";

const Column = ({ category, content, searchWord }) => {
  return (
    <>
      <h2>{category}</h2>
      {content.includes((c) => (
        <Row content={c} />
      ))}
    </>
  );
};

export default Column;
