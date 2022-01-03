import Column from "./Column";

const Table = ({ obj }) => {
  // create a column for each category
  return (
    <div className="Table">
      {obj.length > 0 &&
        obj.map((c) => <Column category={c.category} content={c.content} />)}
    </div>
  );
};

export default Table;
