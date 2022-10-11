import React, { useState, useEffect } from 'react';
import BookService from '../../services/book.service';
import { Card } from '../common/Card';

export const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const book = await BookService.getBooks();
        console.log(book);
        setBooks(book);
      } catch (error) {
        console.log(error);
      }
    };
    getBooks();
  }, []);

  return (
    <div className="row ">
      <h3>Books Available:</h3>
      {books.map((book) => {
        return <Card key={book.id} {...book} />;
      })}
    </div>
  );
};
