import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Result from "./Result/Result";

function ResultsPage({ books, details, setDetails}) {
  // What happens when there is no data?
console.log(books[0])



// let bookDetails = books.map((e) => {
//   fetch('http://openlibrary.org'+e.key+'.json')
//   .then((response) => response.json())
//   .then((detailData) => setDetails(detailData))
//   .catch(console.error)
//   return details
// })
// console.log(bookDetails);
  // if(books.length === 0) navigate("/") or leave the decision with user.
  return <div><Header />{books.map((e) => (<Result book={e} key={e.key}/>))}<Footer /></div>;
}

export default ResultsPage;
