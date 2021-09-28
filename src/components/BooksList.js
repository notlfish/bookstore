import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';

const BooksList = (props) => {
  const { books } = props;

  return (
    <ul>
      {books.map((book) => (
        <BookItem
          key={book.id}
          book={book.title}
        />
      ))}
    </ul>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default BooksList;
