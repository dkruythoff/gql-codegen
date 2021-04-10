import React from 'react'
import { useQuery, gql } from '@apollo/client';
import { Book } from './types';

const BOOKS = gql`
  {
    books {
      title
      author
    }
  }
`;

function Books() {
  const { loading, error, data } = useQuery(BOOKS)

  if (loading) return (<p>Loading...</p>)
  if (error) return (<p>Error...</p>)

  return (
    <ul>
      {data.books.map((book: Book, bookIndex: number) => (
        <li key={`book-${bookIndex}`}>
          Title: {book.title}<br/>
          Author: {book.author}
        </li>
      ))}
    </ul>
  )
}

export default Books
