import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const BookItem = (props) => {
  const {
    id, title, author, currentChapter, progress, category,
  } = props;

  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeBook({ id }));
  };

  return (
    <li className="book-entry f-center">
      <div className="book-display">
        <div className="book-info">
          <p className="book-category bold dim-text">{category}</p>
          <h4 className="book-title roboto">{title}</h4>
          <p className="book-author lb-text">{author}</p>
        </div>
        <div className="book-actions">
          <button type="button">Comments</button>
          <button onClick={handleRemove} type="button">Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="book-progress f-center">
        <div className="completed-wheel">
          <div className="progress-wheel" />
          <p className="progress-percentage">
            {progress}
            %
          </p>
          <p className="dim-text">Completed</p>
        </div>
        <div className="progress-chapter">
          <p className="uppercase dim-text">Current Chapter</p>
          <p>
            Chapter
            {` ${currentChapter}`}
          </p>
          <button type="button" className="progress-update">Update</button>
        </div>
      </div>
    </li>
  );
};

BookItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  currentChapter: PropTypes.number.isRequired,
};

export default BookItem;
