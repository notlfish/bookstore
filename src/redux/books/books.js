import getBooksArr, { persistBook, deleteBook } from '../../utils/bookstore-api';

const CLEAN_STORE = 'bookStore/books/CLEAN_STORE';
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const FETCH_BOOKS = 'bookStore/books/FETCH_BOOKS';
const API_SUCCESS = 'bookStore/books/API_SUCCESS';
const API_FAILURE = 'bookStore/books/API_FAILURE';
const ADD_BOOKS_ARRAY = 'bookStore/books/ADD_BOOKS_ARRAY';
const PERSIST_BOOK = 'bookStore/books/PERSIST_BOOK';
const PERMANENT_REMOVE_BOOK = 'bookStore/books/PERMANENT_REMOVE_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [];

const addBookStore = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const addBook = (book) => (dispatch) => persistBook(book).then(
  () => {
    dispatch({ type: API_SUCCESS, payload: PERSIST_BOOK });
    dispatch(addBookStore(book));
  },
  (error) => dispatch({ type: API_FAILURE, payload: PERSIST_BOOK, error }),
);

const removeBookStore = (book) => ({
  type: REMOVE_BOOK,
  payload: book,
});

export const removeBook = (book) => (dispatch) => deleteBook(book).then(
  () => {
    dispatch({ type: API_SUCCESS, payload: PERMANENT_REMOVE_BOOK });
    dispatch(removeBookStore(book));
  },
  (error) => dispatch({ type: API_FAILURE, payload: PERSIST_BOOK, error }),
);

export const loadBooksFromAPI = () => async (dispatch) => {
  dispatch({ type: FETCH_BOOKS });
  try {
    const payload = await getBooksArr();
    dispatch({ type: API_SUCCESS });
    dispatch({ type: CLEAN_STORE });
    dispatch({
      type: ADD_BOOKS_ARRAY,
      payload,
    });
  } catch (error) {
    dispatch({ type: API_FAILURE, error });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    case ADD_BOOKS_ARRAY:
      return [...state, ...action.payload];
    case CLEAN_STORE:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
