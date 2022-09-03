import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/HomePage/HomePage";
import { useEffect, useState } from "react";
import ResultsPage from "./components/ResultsPage/ResultsPage";
import Result from "./components/ResultsPage/Result/Result";

function App() {
  const [books, setBooks] = useState([]);
  const [details, setDetails] = useState([])

  useEffect(() => {}, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Homepage setBooks={setBooks} books={books} />}
        />
        <Route path="/results" element={<ResultsPage books={books} details={details} setDetails={setDetails}  />} />
        <Route path="/results/:id" element={<Result />} />
      </Routes>
      {/* 
      {books.map((book) => (
        <p>{book.title}</p>
      ))} */}
    </>
  );
}

export default App;
