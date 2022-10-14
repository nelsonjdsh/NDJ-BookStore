import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './components/NavBar/NavBar';
import App from './App';
import { Books } from './components/Books/Books';
import { BookDetails } from './components/BookDetails/BookDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewBooks from './components/NewBook/NewBook';
import 'bootswatch/dist/darkly/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <BrowserRouter>
      <NavBar />
      <div className="container pt-4">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/createBook" element={<NewBooks />} />
          <Route path="/books" element={<Books />} />
          <Route path="/book/details/:id" element={<BookDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  </div>
);
