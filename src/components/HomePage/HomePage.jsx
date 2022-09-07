import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./HomePage.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Homepage({ setBooks, books}) {
  const [search, setSearch] = useState("");
  
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    fetch("http://openlibrary.org/search.json?title=" + search.replace(' ', '+')+'&limit=10&fields=key,author_name,cover_i,title')
      .then((response) => response.json())
      .then((bookData) => {
        console.log("Book data ->", bookData);
        setBooks(bookData.docs);
        console.log(books);
        navigate("/results");
      })
      .catch(console.error);
  }
  

  return (
    <div id="homepageWrapper">
      <Header />
      
      <form id="searchBar">
        <label for='searchInput'>Input the title of the book you're looking for here!</label>
        <input
          id="searchInput"
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          name="search"
          placeholder="Search by title"
          value={search}
        />

        <button id="searchButton" onClick={handleClick}>🔎</button>
      </form>

      {/* so that'd be an input and presumably a button to call a function to initiate a fetch and filter based on what's written */}
      <h2>Featured Books</h2>
      <section id="featuredBooks">
        <div className='featuredItem'>
          <img className='featuredImage' src='https://covers.openlibrary.org/b/id/6805384-M.jpg' alt='Book Cover' />
          <h4 className='featuredTitle'><Link to='/works/OL15842033W'>Chasm City</Link></h4>
          <h5 className='featuredAuthor'>Alastair Reynolds</h5>
        </div>
        <div className='featuredItem'>
          <img className='featuredImage' src='https://covers.openlibrary.org/b/id/6450442-M.jpg' alt='Book Cover' />
          <h4 className='featuredTitle'><Link to='/works/OL32197W'>House of Leaves</Link></h4>
          <h5 className='featuredAuthor'>Mark Z. Danielewski</h5>
        </div>
        <div className='featuredItem'>
          <img className='featuredImage' src='https://covers.openlibrary.org/b/id/11464254-M.jpg' alt='Book Cover' />
          <h4 className='featuredTitle'><Link to='/works/OL2163649W'>The Hitch Hiker's Guide to the Galaxy</Link></h4>
          <h5 className='featuredAuthor'>Douglas Adams</h5>
        </div>
      </section>
      {/* just a fixed thing we decide on, nothing special */}

      {/* how to track recently viewed... possibly something with useParams */}
      <Footer/>
    </div>
  );
}

export default Homepage;
