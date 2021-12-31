import Row from "./Row";

const Column = ({ category, content }) => {

  console.log(content)
  return (
    <div>
      <h2>{category}</h2>
      {content.length > 0 &&
        content.map((para) => <Row category={category} content={para} />)}
    </div>
  );
};

export default Column;
