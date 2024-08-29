import React from "react";

const BookList = ({ books, setList, book, setBook }) => {
  const handleDelete = (id) => {
    const requestInit = {
      method: "DELETE",
    };
    fetch("http://localhost:9000/api/" + id, requestInit)
      .then((response) => response.text())
      .then((response) => console.log(response));

    setList(true);
  };

  let { titulo, autor, edicion } = book;

  const handleEdit = (id) => {

    edicion = parseInt(edicion, 10);

    //Validacion
    if (titulo === "" || autor === "" || edicion <= 0) {
      alert("Todos los campos son obligatorios");
      return;
    }

    const requestInit = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    };
    fetch("http://localhost:9000/api/" + id, requestInit)
      .then((response) => response.text())
      .then((response) => console.log(response));

    setList(true);

    //Reiniciar el form
    setBook({
        titulo: '',
        autor: '',
        edicion: 0
    })
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Titulo</th>
          <th>Autor</th>
          <th>Edicion</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.id}>
            <td>{book.titulo}</td>
            <td>{book.autor}</td>
            <td>{book.edicion}</td>

            <td>
              <div className="mb-3">
                <button
                  onClick={() => handleDelete(book.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>

              <div className="mb-3">
                <button
                  onClick={() => handleEdit(book.id)}
                  className="btn btn-secondary"
                >
                  Edit
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BookList;
