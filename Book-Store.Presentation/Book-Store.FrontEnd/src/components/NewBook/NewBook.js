import React, { useState } from 'react';

const NewBook = () => {
  const [bookPages, setPages] = useState([{ page_content: '' }]);
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    year: '',
    category: '',
    edition: '',
    status: true,
  });

  const handleSaveBook = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const handleBookPages = (e) => {
    setPages({ ...newBook.pages, [e.target.name]: e.target.value });
    console.log(bookPages);
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log(newBook);
  };

  const styles = {
    pageTitle: {
      fontSize: '2rem',
      marginBottom: 40,
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
          <textarea
            type="text"
            name="page_content"
            rows="4"
            cols="50"
            onChange={handleBookPages}
            aria-describedby="basic-addon1"
          />
        </div>
        <button
          className="btn btn-primary"
          style={styles.saveBtn}
          onClick={handleSave}
        >
          Save Book
        </button>
      </form>
    </div>
  );
};

export default NewBook;
