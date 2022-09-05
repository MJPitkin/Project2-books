import React from 'react'
import { Link } from 'react-router-dom'

function Result(book, coverImageData) {
  console.log(book)
  console.log(coverImageData)
  return (
    <div><img src={`https://covers.openlibrary.org/b/id/${book.book.cover_i}-L.jpg`}/><h4><Link to={`${book.book.key}`} key={book.book.key}>{book.book.title}</Link></h4><h5>{book.book.author_name}</h5></div>
  )
}

export default Result