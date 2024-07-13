
// // export default Bookcatalog;
// import React, { useState, useEffect } from "react";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import axios from "axios";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCWQyz6wx5_TP_bO8phqU6wCrq5yhoSmMk",
//   authDomain: "liprary-app.firebaseapp.com",
//   projectId: "liprary-app",
//   storageBucket: "liprary-app.appspot.com",
//   messagingSenderId: "1056126008114",
//   appId: "1:1056126008114:web:fd689d21cb075ad7e4752b",
//   measurementId: "G-5Y58Y4V7P4",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// function Bookcatalog() {
//   const [books, setBooks] = useState([]);

//   const getdata = () => {
//     axios
//       .get("https://liprary-app-default-rtdb.firebaseio.com/books.json")
//       .then((res) => {
//         const data = res.data;
//         // تحويل الكائن إلى مصفوفة
//         const bookArray = Object.keys(data).map((key) => ({
//           id: key,
//           ...data[key],
//         }));
//         setBooks(bookArray);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   useEffect(() => {
//     getdata();
//   }, []);

//   const deleteBook = (id) => {
//     axios
//       .get
//       (
//         `https://liprary-app-default-rtdb.firebaseio.com/books/${id}.json`,
//         {
//           isDeleted: true,
//         }
//       )
//       .then((res) => {
//         setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
//   const updateBook = (id) =>{
//     axios.put(
//       `https://liprary-app-default-rtdb.firebaseio.com/books/${id}.json`
//     );
    
//   }

//   return (
//     <div className="container">
//       {books.map((book) => (
//         <div key={book.id} className="card2">
//           <h2>{book.title}</h2>
//           <h4>{book.author}</h4>
//           <p>{book.isbn}</p>
//           <button onClick={() => updateBook(book.id)} className="update">update</button>
//           <button onClick={() => deleteBook(book.id)} className="delete">
//             Delete
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Bookcatalog;

import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import axios from "axios";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWQyz6wx5_TP_bO8phqU6wCrq5yhoSmMk",
  authDomain: "liprary-app.firebaseapp.com",
  projectId: "liprary-app",
  storageBucket: "liprary-app.appspot.com",
  messagingSenderId: "1056126008114",
  appId: "1:1056126008114:web:fd689d21cb075ad7e4752b",
  measurementId: "G-5Y58Y4V7P4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function Bookcatalog() {
  const [books, setBooks] = useState([]);
  const [editBook, setEditBook] = useState(null);

  const getdata = () => {
    axios
      .get("https://liprary-app-default-rtdb.firebaseio.com/books.json")
      .then((res) => {
        const data = res.data;
        const bookArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setBooks(bookArray);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getdata();
  }, []);

  const deleteBook = (id) => {
    axios
      .put(
        `https://liprary-app-default-rtdb.firebaseio.com/books/${id}.json`,
        {
          isDeleted: true,
        }
      )
      .then((res) => {
        setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateBook = (book) => {
    axios
      .put(
        `https://liprary-app-default-rtdb.firebaseio.com/books/${book.id}.json`,
        book
      )
      .then((res) => {
        setBooks((prevBooks) =>
          prevBooks.map((b) => (b.id === book.id ? { ...b, ...book } : b))
        );
        setEditBook(null);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    updateBook(editBook);
  };

  return (
    <div className="container">
      {books.map((book) => (
        <div key={book.id} className="card2">
          {editBook && editBook.id === book.id ? (
            <form onSubmit={handleEditSubmit}>
              <input
                type="text"
                name="title"
                value={editBook.title}
                onChange={handleEditChange}
              />
              <input
                type="text"
                name="author"
                value={editBook.author}
                onChange={handleEditChange}
              />
              <input
                type="text"
                name="isbn"
                value={editBook.isbn}
                onChange={handleEditChange}
              />
              <button type="submit" className="update">
                Save
              </button>
              <button onClick={() => setEditBook(null)} className="cancel">
                Cancel
              </button>
            </form>
          ) : (
            <>
              <h2>{book.title}</h2>
              <h4>{book.author}</h4>
              <p>{book.isbn}</p>
              <button onClick={() => setEditBook(book)} className="update">
                Update
              </button>
              <button onClick={() => deleteBook(book.id)} className="delete">
                Delete
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default Bookcatalog;
