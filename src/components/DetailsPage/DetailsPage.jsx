import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './DetailsPage.css'

function DetailsPage() {
  const [details, setDetails] = useState([])
  const [author, setAuthor] = useState([])
  console.log(useParams());
  const params = useParams();
  useEffect(() => {
    fetch(`http://openlibrary.org/works/${params.id}.json`)
    .then((response) => response.json())
    .then((detailData) => {
      setDetails(detailData);
      return fetch(`http://openlibrary.org${detailData.authors[0].author.key}.json`)
    })
    .then((response) => response.json())
    .then((authorData) => setAuthor(authorData))
    .catch(console.error)
  },[params.id])
  console.log(details)
  console.log(author)
  return (
    <>
    <Header/>
    <div id="detailsWrapper">
      
      
        <div id="cover">
         {details.covers === undefined ? "no image available" : <img src={`https://covers.openlibrary.org/b/id/${details.covers[0]}-L.jpg`} alt='Book Cover' />}
        </div>

        <div id="description">
         <h3>{details.title}</h3>
         <h4>{author.name}</h4>
         <p>{details.description === undefined ? "No Description Available." : (
            typeof details.description === 'object' ? details.description.value : details.description
          )}</p>
        </div>
      
    </div>
    <Footer/>
    </>
  )}
  
//   if ( typeof details.description === 'string' && details.covers === undefined) {
//     return <div>no image available {details.title} {author.name} {details.description}</div>
//   } else if (typeof details.description === 'string') {
//     return <div><img src={`https://covers.openlibrary.org/b/id/${details.covers[0]}-L.jpg`} alt='Book Cover' /> {details.title} {author.name} {details.description}</div>
//   } else if (typeof details.description === 'object' && details.covers === undefined) {
//     return <div>no image available { details.title } { author.name } { details.description.value }</div>
//   } else if (typeof details.description === 'object'){
//     return <div><img src={`https://covers.openlibrary.org/b/id/${details.covers[0]}-L.jpg`} alt='Book Cover' />{details.title} {author.name} {details.description.value}</div>
//   } else if (details.description === undefined && details.covers === undefined){
//     return <div>No Image Available. {details.title} {author.name} No Description Available.</div>
//   } else if (details.description === undefined) {
//     return <div><img src={`https://covers.openlibrary.org/b/id/${details.covers[0]}-L.jpg`} alt='Book Cover' /> {details.title} {author.name} No Description Available.</div>}
// }


export default DetailsPage;
