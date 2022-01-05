import { useState, useEffect } from "react";
import Row from "./Row";

const Column = ({ category, contents }) => {
  const [contentsArr, setContentsArr] = useState([]);

  useEffect(() => {
    const content = contents.filter((c) =>
      c.toLowerCase().includes(category.toLowerCase())
    );
    setContentsArr(content);
  }, [contents]);

  return (
    <ul className="col">
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
      {contentsArr.length > 0 &&
        contentsArr.map((content) => <Row content={content} />)}
    </ul>
  );
};

export default Column;
