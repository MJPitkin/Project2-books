import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

function DetailsPage() {
  const [details, setDetails] = useState([])
  console.log(useParams());
  const params = useParams();
  useEffect(() => {
    fetch(`http://openlibrary.org/works/${params.id}.json`)
    .then((response) => response.json()
    .then((response) => {setDetails(response)}))
  },[])
  console.log(details)
  if ( typeof details.description === 'string' ) {
    return <div><img src={`https://covers.openlibrary.org/b/id/${details.covers[0]}-L.jpg`}/> {details.title} {details.description}</div>
  } else if (typeof details.description === 'object'){
    return <div><img src={`https://covers.openlibrary.org/b/id/${details.covers[0]}-L.jpg`} />{details.title} {details.description.value}</div>
  } else if (details.covers === undefined || details.description === undefined){
    return <div>whoops no image {details.title} No Description Available.</div>
  }
}


export default DetailsPage;
