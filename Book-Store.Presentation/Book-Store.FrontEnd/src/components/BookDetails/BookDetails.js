import React, { useState, useEffect } from 'react';
import BookService from '../../services/book.service';
import { useParams } from 'react-router-dom';

export const BookDetails = (props) => {
  const params = useParams();
  const [index, setIndex] = useState(1);

  const [book, setBook] = useState({
    title: '',
    author: '',
    year: '',
    category: '',
    pages: [],
  });

  useEffect(() => {
    const getBook = async () => {
      try {
        const book = await BookService.getBook(params.id);
        console.log({ book });
        setBook(book);
      } catch (error) {
        console.error(error);
      }
    };
    getBook();
  }, [params.id]);

  return (
    <div>
      <h3 className="p-2">Book Details:</h3>
      <div className="container">
        <div
          className="card p-4 mb-4"
          style={{ backgroundColor: '#222326', color: '#FFFFFF' }}
        >
          <h1>
            Book Title: <strong>{book.title}</strong>
          </h1>
          <h2>Book Author: {book.author}</h2>
          <h2>Published on {book.year}</h2>
          <h2> Category: {book.category}</h2>

          {book.pages.slice(0, index).map((x) => (
            <div
              style={{
                backgroundColor: '#fefefe',
                marginTop: '10px',
                borderRadius: '5px',
                padding: '5px',
                marginBottom: '10px',
              }}
            >
              {/* <p style={{ color: 'black' }}>{index}</p> */}
              <p style={{ color: 'black' }}>{x.page_content}</p>
            </div>
          ))}
          {/* {book.pages.map((page, i) => {
            console.log(i);
            return (
              <div style={{ backgroundColor: '#f3f3' }}>
                <p style={{ color: '#fff' }}>{page.page_content}</p>
              </div>
            );
          })} */}
          <button
            style={{
              width: '100px',
              marginTop: 10,
              borderRadius: 1,
            }}
            onClick={() => setIndex((prevIndex) => prevIndex + 1)}
          >
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
};
