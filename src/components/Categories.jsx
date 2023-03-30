import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCategoryId } from '../redux/filter/filterSlice';

const Categories = React.memo(({ categoryId }) => {
  const sortRef = useRef(null);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const categories = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry'];

  const onClickSort = (id) => {
    dispatch(setCategoryId(id));
  };

  const list = categories.map((item, index) => (
    <li
      onClick={() => {
        onClickSort(index);
      }}
      key={index}
      className={index === categoryId ? 'active' : ''}>
      {item}
    </li>
  ));

  return (
    <div
      onClick={() => {
        setOpen(!open);
      }}
      ref={sortRef}
      className="sort">
      <div className="sort__label">
        <b onClick={() => setOpen(!open)}>Categories: </b>

        <span> {categories[categoryId]}</span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>{list}</ul>
        </div>
      )}
    </div>
  );
});

export default Categories;
