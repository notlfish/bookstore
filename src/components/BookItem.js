import React from 'react';
import PropTypes from 'prop-types';

const BookItem = (props) => {
  const {
    title, author, currentChapter, progress, category,
  } = props;
  return (
    <li>
      <div className="book-display">
        <div className="book-info">
          <p className="book-category">{category}</p>
          <h4 className="book-title">{title}</h4>
          <p className="book-author">{author}</p>
        </div>
        <div className="book-actions">
          <button type="button">Comments</button>
          <button type="button">Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="book-progress">
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
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  currentChapter: PropTypes.number.isRequired,
};

export default BookItem;
