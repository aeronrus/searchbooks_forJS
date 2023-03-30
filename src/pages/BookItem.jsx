import React, { useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import '../scss/components/_book-block.scss';

const BookItem = () => {
  const [book, setBook] = useState([]);
  const [loaded, setIsLoaded] = useState(false);
  const { id } = useParams();

  const getBook = async () => {
    try {
      await axios
        .get(
          `https://www.googleapis.com/books/v1/volumes/${id}?key=AIzaSyCmncm-PfZWBDFTmOBluAQaWct7Dfl76Io`,
        )
        .then((res) => {
          setBook(res.data);
          setIsLoaded(true);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBook();
  }, []);

  return loaded ? (
    <div className="content">
      <img className="content__bigImg" src={book.volumeInfo?.imageLinks.thumbnail} />
      <div className="container">
        {' '}
        <h2>{book.volumeInfo.title}</h2>
        <h4>
          Authors:
          {book.volumeInfo?.authors?.map((item) => (
            <p>{item}</p>
          ))}
        </h4>
        <h4>
          Categories:
          {book.volumeInfo.categories?.map((item) => (
            <p>{item}</p>
          ))}
        </h4>
        <h4>
          Description:<p>{book.volumeInfo.description}</p>
        </h4>
      </div>
      <Link to="/">
        <button className="button button--outline button--add">Назад</button>
      </Link>
    </div>
  ) : (
    <h1>Загрузка</h1>
  );
};
export default BookItem;
