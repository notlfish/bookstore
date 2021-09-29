import { useSelector } from 'react-redux';
import BooksList from './BooksList';
import AddBookForm from './AddBookForm';

const Bookstore = () => {
  const books = useSelector((state) => state.books);

  return (
    <div>
      <BooksList books={books} />
      <AddBookForm />
    </div>
  );
};

export default Bookstore;
