import Column from "./Column";

const Table = ({ category, content }) => {
  // create a column for each category

  return (
    <div className="Table">
      {category.map((colName) => (
        <Column category={colName} content={content} />
      ))}
    </div>
  );
};

export default Table;
