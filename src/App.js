import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";
import React, { useState } from "react";

function App() {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [apiKey, seApiKey] = useState(
    "AIzaSyDOzrw_nvJ55U2kquaL60Zye-S9LTPCplU"
  );

  function handleChange(event) {
    const book = event.target.value;
    setBook(book);
  }

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .get(
        "GET https://www.googleapis.com/books/v1/volumes?q=" +
          book +
          "&key=" +
          apiKey +
          "&maxResults=40"
      )
      .then(data => {
        console.log(data);
      });
  }

  return (
    <div class="container">
      <h1>Book Search App</h1>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <input
            type="text"
            onChange={handleChange}
            className="form-control mt-10"
            placeholder="Search from Books"
            autoComplete="off"
          />
          <button className="btn btn-danger">Search</button>
        </div>
      </form>
    </div>
  );
}

export default App;
