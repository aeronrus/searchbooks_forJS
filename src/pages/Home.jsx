import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookCard from '../components/BookCard';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import { selectBooks } from '../redux/books/booksSlice';
import { selectFilter } from '../redux/filter/filterSlice';

import '../scss/app.scss';

const Home = () => {
  const { books, totalItems } = useSelector(selectBooks);
  const booksList = books.map((item) => (
    <BookCard
      key={item.id}
      id={item.id}
      title={item.volumeInfo.title}
      imgUrl={item.volumeInfo.imageLinks?.smallThumbnail}
      authors={item.volumeInfo.authors}
    />
  ));

  const { categoryId, sortId } = useSelector(selectFilter);

  return (
    <div className="content">
      <div className="content__top">
        <Categories categoryId={categoryId} />
        <Sort sortId={sortId} />
      </div>
      <div>Total books: {totalItems}</div>
      <div className="content__items">{booksList}</div>
    </div>
  );
};
export default Home;