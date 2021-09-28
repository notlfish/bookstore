import React from 'react';
import BooksList from './BooksList';
import AddBookForm from './AddBookForm';

const Bookstore = () => (
  <div>
    <BooksList books={[]} />
    <AddBookForm />
  </div>
);

export default Bookstore;
