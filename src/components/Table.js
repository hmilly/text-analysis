import Column from "./Column";

const Table = ({ obj }) => {
  // create a column for each category
  console.log(obj);
  return (
    <div className="Table">
      {obj.length > 1 &&
        obj.map((c) => <Column category={c.category} content={c.content} />)}
    </div>
  );
};

export default Table;
