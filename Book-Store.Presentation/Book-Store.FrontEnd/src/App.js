import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  const styles = {
    pageTitle: {
      fontSize: '2rem',
    },
  };
  return (
    <div style={{ height: '100%' }}>
      <h2 style={styles.pageTitle}>Welcome to NDJ BookStore!</h2>
      <p>
        This React Applications allows you to get all the available books in the
        store and access book's details with just a few clicks!
      </p>
      <p style={{ fontSize: '1rem' }}>
        Made By: <strong>Nelson De Jesus | NDJ | nelsondjsh</strong>
      </p>
      <p style={{ fontSize: '1.2rem' }}>Technologies Used:</p>
      <ul>
        <li>
          BackEnd: <strong>NestJS</strong>
        </li>
        <li>
          Database: <strong>MySQL</strong>
        </li>
        <li>
          FrontEnd: <strong>ReactJS & Bootstrap</strong>
        </li>
        <p style={{ marginTop: '1.2rem' }}>Other Tools Used:</p>
        <ul>
          <li>
            DB Hosting: <strong>Docker Container & PlanetScale Cloud DB</strong>
          </li>
        </ul>
      </ul>
      <Link to="/createBook">
        <button className="btn btn-primary p-3">Create Book</button>
      </Link>
    </div>
  );
};

export default App;
