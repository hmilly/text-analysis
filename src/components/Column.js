import Row from "./Row";

const Column = ({ category, content }) => {
  return (
    <>
      <h2>{category}</h2>
       <Row content={content} />
    </>
  );
};

export default Column;
