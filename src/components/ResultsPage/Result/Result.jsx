import React from 'react'
import { Link } from 'react-router-dom'
import './Result.css'

function Result(book, coverImageData) {
  console.log(book)
  console.log(coverImageData)
  return (
    <div className='resultItem'>
      {book.book.cover_i === undefined ? (<span>no image available</span>) : <img className='resultImage' src={`https://covers.openlibrary.org/b/id/${book.book.cover_i}-M.jpg`} alt='Book Cover' />}
      <h4 className='resultTitle'><Link to={`${book.book.key}`} key={book.book.key}>{book.book.title}</Link></h4>
      <h5 className='resultAuthor'>{book.book.author_name[0]}</h5>
    </div>
  )
}

export default Result