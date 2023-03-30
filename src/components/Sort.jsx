import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSortId } from '../redux/filter/filterSlice';

const Sort = React.memo(({ sortId }) => {
  const sortRef = useRef(null);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const sorts = ['relevance ', 'newest'];

  const onClickSort = (id) => {
    dispatch(setSortId(id));
  };

  const list = sorts.map((item, index) => (
    <li
      onClick={() => {
        onClickSort(index);
      }}
      key={index}
      className={index === sortId ? 'active' : ''}>
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
        <b onClick={() => setOpen(!open)}>Sort by: </b>

        <span> {sorts[sortId]}</span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>{list}</ul>
        </div>
      )}
    </div>
  );
});

export default Sort;
