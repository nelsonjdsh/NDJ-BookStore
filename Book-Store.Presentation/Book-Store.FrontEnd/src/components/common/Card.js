import React from 'react';
import PropTypes from 'prop-types';
import { AiFillBook } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import '../common/card.css';

export const Card = (props) => {
  const navigate = useNavigate();

  return (
    <div className="col-md-4">
      <div
        className="card card-body m-4 card-custom"
        style={{ cursor: 'pointer' }}
        onClick={() => {
          navigate(`/book/details/${props.id}`);
        }}
      >
        <div className="d-flex justify-content-between">
          <h1>{props.title}</h1>
          <AiFillBook />
        </div>
        <p>Author: {props.author}</p>
        <p>Category: {props.category}</p>
        <p>Published: {props.year}</p>
        <p># of Pages: {props.num_pages}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
