import React, { useState } from 'react';
import bookService from '../../services/book.service';
import { useNavigate } from 'react-router-dom';

const NewBook = () => {
  const navigate = useNavigate();
  const [bookPage, setPages] = useState('');
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    year: '',
    pages: [],
    category: '',
    edition: '',
    status: true,
  });

  const handleSaveBook = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const handleBookPages = (e) => {
    setPages(e.target.value);
    console.log({ bookPage });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    console.log(newBook);
    await bookService.createBook(newBook).then(() => {
      navigate('/books');
    });
  };

  const addPageToBook = (e) => {
    e.preventDefault();
    const page = { page_content: bookPage };
    newBook.pages.push(page);
    console.log(newBook);
    setPages('');
  };

  const styles = {
    pageTitle: {
      fontSize: '2rem',
      marginBottom: 40,
    },
    addPage: {
      backgroundColor: 'green',
    },
    saveBtn: {
      marginTop: 20,
    },
  };
  return (
    <div>
      <h2 style={styles.pageTitle}>Add New Book to the Store</h2>
      <form className="form-group col-md-2">
        <div className="input-group mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="BookName"
            name="title"
            onChange={handleSaveBook}
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-4">
          <input
            type="text"
            className="form-control"
            onChange={handleSaveBook}
            placeholder="Author"
            name="author"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-4">
          <input
            type="text"
            onChange={handleSaveBook}
            className="form-control"
            placeholder="Year of Publication"
            name="year"
            aria-describedby="basic-addon1"
          />
        </div>

        <div className="input-group mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Category"
            name="category"
            onChange={handleSaveBook}
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Edition"
            name="edition"
            onChange={handleSaveBook}
            aria-describedby="basic-addon1"
          />
        </div>
        <div>
          <label className="mb-2">Page Content</label>
          <textarea
            type="text"
            name="page_content"
            rows="4"
            cols="50"
            value={bookPage}
            onChange={handleBookPages}
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="row p-2 mb-5">
          <button
            className="btn"
            style={styles.addPage}
            onClick={addPageToBook}
          >
            Add Page
          </button>
          <button
            className="btn btn-primary"
            style={styles.saveBtn}
            onClick={handleSave}
          >
            Save Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewBook;
