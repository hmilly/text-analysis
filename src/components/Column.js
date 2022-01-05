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
    <div className="col">
      <h2>{category}</h2>
      {contentsArr.length > 0 &&
        contentsArr.map((content) => <Row content={content} />)}
    </div>
  );
};

export default Column;
