const Row = ({ content }) => {
  return (
    <section>
      <p>{content}</p>
      <p>{`Words used: ${content && content.split(" ").length}`}</p>
    </section>
  );
};

export default Row;
