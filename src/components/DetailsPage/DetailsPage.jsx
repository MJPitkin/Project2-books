import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

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
  },[])
  console.log(details)
  console.log(author)
  if ( typeof details.description === 'string' && details.covers[0] === undefined) {
    return <div>no image available {details.title} {author.name} {details.description}</div>
  } else if (typeof details.description === 'string') {
    return <div><img src={`https://covers.openlibrary.org/b/id/${details.covers[0]}-L.jpg`} alt='Book Cover' /> {details.title} {author.name} {details.description}</div>
  } else if (typeof details.description === 'object' && details.covers[0] === undefined) {
    return <div>no image available { details.title } { author.name } { details.description.value }</div>
  } else if (typeof details.description === 'object'){
    return <div><img src={`https://covers.openlibrary.org/b/id/${details.covers[0]}-L.jpg`} alt='Book Cover' />{details.title} {author.name} {details.description.value}</div>
  } else if (details.description === undefined && details.covers === undefined){
    return <div>whoops no image {details.title} {author.name} No Description Available.</div>
  } else if (details.description === undefined) {
    return <div><img src={`https://covers.openlibrary.org/b/id/${details.covers[0]}-L.jpg`} alt='Book Cover' /> {details.title} {author.name} No Description Available.</div>}
}


export default DetailsPage;
