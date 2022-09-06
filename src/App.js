import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/HomePage/HomePage";
import { useEffect, useState } from "react";
import ResultsPage from "./components/ResultsPage/ResultsPage";
import DetailsPage from "./components/DetailsPage/DetailsPage";

function App() {
  const [books, setBooks] = useState([]);
  

  useEffect(() => {}, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Homepage setBooks={setBooks} books={books} />}
        />
        <Route path="/results" element={<ResultsPage books={books} />} />
        <Route path="/works/:id" element={<DetailsPage books={books}/>} />
      </Routes>
      {/* 
      {books.map((book) => (
        <p>{book.title}</p>
      ))} */}
    </>
  );
}

export default App;
