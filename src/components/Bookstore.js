import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import BooksList from './BooksList';
import AddBookForm from './AddBookForm';
import { loadBooksFromAPI } from '../redux/books/books';

const Bookstore = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBooksFromAPI());
  }, []);

  return (
    <div>
      <BooksList books={books} />
      <AddBookForm />
    </div>
  );
};

export default Bookstore;
