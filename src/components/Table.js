import Column from "./Column";

const Table = ({ categories, contents }) => {
  return (
    <div className="Table">
      {categories.length > 0 &&
        categories.map((category) => <Column category={category} contents={contents} />)}
    </div>
  );
};

export default Table;
