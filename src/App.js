import { useState, useEffect } from "react";
import Form from "./components/Form";
import Table from "./components/Table";
import "./App.css";

const App = () => {
  const [category, setCategory] = useState({});
  const [content, setContent] = useState({});
  const [searchWord, setSearchWord] = useState("")

  return (
    <div className="App">
      <header className="App-header">
        <h1>Text Analysis</h1>
        <p>
          A program used to assess body of text and cargorise it based on
          categories set.
        </p>
      </header>
      <Form
        category={category}
        content={content}
        setCategory={setCategory}
        setContent={setContent}
        searchWord={searchWord}
      />
      <Table content={content} category={category} />
    </div>
  );
};

export default App;
