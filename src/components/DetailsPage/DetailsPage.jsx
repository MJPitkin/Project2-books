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
  return <div>{JSON.stringify(details)}</div>;
}

export default DetailsPage;
