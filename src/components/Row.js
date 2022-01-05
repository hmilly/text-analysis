const Row = ({ content }) => {
  return (
    <li>
      <p>{content}</p>
      <p>{`Words used: ${content && content.split(" ").length}`}</p>
    </li>
  );
};

export default Row;
