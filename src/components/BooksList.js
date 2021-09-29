import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';

const progress = ({ chapters, currentChapter }) => {
  const fraction = (currentChapter - 1) / chapters;
  return Math.floor(100 * fraction);
};

const BooksList = (props) => {
  const { books } = props;

  return (
    <ul>
      {books.map((book) => (
        <BookItem
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          currentChapter={book.currentChapter}
          progress={progress(book)}
          category={book.category}
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
      author: PropTypes.string.isRequired,
      chapters: PropTypes.number.isRequired,
      currentChapter: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default BooksList;
