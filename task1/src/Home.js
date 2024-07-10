import { useState } from "react";
function Books() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "مقدمة ابن خلدون ",
      author: "ابن خلدون ",
      isbn: "1289499030",
    },
    {
      id: 2,
      title: "الحاوي في الطب ",
      author: "ابو بكر الرازي ",
      isbn: "893847239479",
    },
    {
      id: 3,
      title: "الحاوي في الطب ",
      author: "ابو بكر الرازي ",
      isbn: "89384567543",
    },
    {
      id: 4,
      title: "الحاوي في الطب ",
      author: "ابو بكر الرازي ",
      isbn: "89234568764433",
    },
  ]);

  return (
    <div className="container">
      {books.map((book) => (
        <div key={book.id} className="card">
          <h2>{book.title}</h2>
          <h4>{book.author}</h4>
          <p>{book.isbn}</p>
        </div>
      ))}
    </div>
  );
}
export default Books;
