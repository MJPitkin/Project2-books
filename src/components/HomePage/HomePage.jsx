import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./HomePage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Homepage({ setBooks, books, details, setDetails }) {
  const [search, setSearch] = useState("");
  
  const navigate = useNavigate();

  // fetch("https://covers/openlibrary.org/b/id/" + books[0].cover_i + "-L.jpg")
  //   .then((response) => response.blob())
  //   .then(coverImage => {
  //     const localUrl = URL.createObjectURL(coverImage);
  //     setCoverImageData(localUrl);
  //   })
  //   .catch(console.error);

  function handleClick(e) {
    e.preventDefault();
    fetch("http://openlibrary.org/search.json?title=" + search.replace(' ', '+')+'&limit=3&fields=key,author_name,cover_i,title')
      .then((response) => response.json())
      .then((bookData) => {
        console.log("Book data ->", bookData);
        setBooks(bookData.docs);
        console.log(books);
        // return fetch('http://openlibrary.org'+bookData.docs[0].key+'.json')
        // setCoverImageData(bookData.docs.map((e) => e.cover_i));
        // Now go to /results  -> programatically changing route
        navigate("/results");
      })
      // .then((response) => response.json())
      // .then((detailData) => {
      //   console.log(detailData);
      //   setDetails(detailData.docs);
      // })
      .catch(console.error);
  }

  // function fetchImage() {
  //   fetch("https://covers.openlibrary.org/b/id/" + books[0].cover_i + "-L.jpg")
  //       .then((response) => response.blob())
  //     .then(coverImage => {
  //       const localUrl = URL.createObjectURL(coverImage);
  //       setCoverImageData(localUrl);
  //     })
  // }
  

  return (
    <div>
      <Header />
      
      <form>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          name="search"
          placeholder="Search"
          value={search}
        />

        <button onClick={handleClick}>🔎</button>
      </form>

      {/* so that'd be an input and presumably a button to call a function to initiate a fetch and filter based on what's written */}
      <h2>Featured Books</h2>
      <p>Featured books go here</p>
      {/* just a fixed thing we decide on, nothing special */}
      <h2>Recently Viewed</h2>
      <p>Recently viewed books go here</p>
      {/* how to track recently viewed... possibly something with useParams */}
      <Footer />
    </div>
  );
}

export default Homepage;
