//Miguel Salomon

import React, { Fragment, useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import BookList from "./Components/BookList";
import Form from "./Components/Form";

function App() {

  const [book, setBook] = useState({
    titulo: "",
    autor: "",
    edicion: 0,
  });

  const [books, setBooks] = useState([]);

  const [list, setList] = useState(false);

  useEffect(() => {
    const getBooks = () => {
      fetch("http://localhost:9000/api")
        .then((response) => response.json())
        .then((response) => setBooks(response));
    };
    getBooks();
    setList(false);
  }, [list]);

  return (
    <Fragment>
      <Navbar brand="Library App" />
      <div className="container">
        <div className="row">

          <div className="col-7">
            <h2 style={{ textAlign: "center" }}>Books</h2>
            <BookList books={books} book={book} setBook={setBook} setList={setList} />
          </div>

          <div className="col-5">
            <h2 style={{ textAlign: "center" }}>Book Form</h2>
            <Form book={book} setBook={setBook} />
          </div>

        </div>
      </div>
    </Fragment>
  );
}

export default App;
