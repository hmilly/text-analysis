import Column from "./Column";

const Table = ({ category, content, searchWord }) => {
  // create a column for each category

  return (
    <div className="Table">
      {content.map((colName) => (
        <Column category={colName} content={content} />
      ))}
    </div>
  );
};

export default Table;
