import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBooks } from '../redux/books/booksSlice';
import { selectFilter } from '../redux/filter/filterSlice';
import '../scss/components/_header.scss';

const Header = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');
  const { categoryId, sortId } = useSelector(selectFilter);

  const categories = ['', 'art', 'biography', 'computers', 'history', 'medical', 'poetry'];
  const sorts = ['relevance', 'newest'];

  const updateInput = (event) => {
    setSearchValue(event.target.value);
  };
  const a = 0;
  console.log('categoryId:' + categoryId);
  const b = ['Computers'];
  const handleSearch = () => {
    try {
      dispatch(
        fetchBooks({
          searchValue,
          categories,
          categoryId,
          sorts,
          sortId,
        }),
      );
    } catch (error) {
      console.log(error);
      alert('Sorry, we have a server problems');
    }
  };

  useEffect(() => {
    dispatch(
      fetchBooks({
        searchValue,
        categories,
        categoryId,
        sorts,
        sortId,
      }),
    );
  }, [categoryId, sortId]);
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <img
            src="https://ladushki-club.ru/wp-content/uploads/f/3/4/f34ea484e2e95a981996c7ccfbd26fe1.jpeg"
            alt="Pizza logo"
          />
        </Link>
        <div className="container">
          <input
            value={searchValue}
            onChange={updateInput}
            onKeyDown={(e) => (e.key === 'Enter' ? handleSearch() : '')}
            placeholder="Search books"></input>
          <button onClick={handleSearch} className="button button--outline button--add">
            Search
          </button>
        </div>
        <div>
          <h1>Search for books</h1>
          <p>Enter the name of the book</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
