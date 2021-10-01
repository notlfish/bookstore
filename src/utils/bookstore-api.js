const APP_IDENTIFIER = 'TCtXOM8Wbp8pVfhYbyMh';
const PREFIX_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const APP_URL = `${PREFIX_URL}/apps/${APP_IDENTIFIER}/books`;

const toBooksArray = (parsedResponse) => Object
  .values(parsedResponse)
  .map((wrappedBook) => {
    const book = JSON.parse(wrappedBook[0].title);
    return {
      ...book,
      chapters: parseInt(book.chapters, 10),
      currentChapter: parseInt(book.currentChapter, 10),
    };
  });

const getBooksArr = async () => {
  const response = await fetch(APP_URL);
  const booksObj = await response.json();
  return toBooksArray(booksObj);
};

export const persistBook = (book) => fetch(APP_URL, {
  method: 'POST',
  body: JSON.stringify({
    item_id: book.id,
    title: JSON.stringify(book),
    category: book.category,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
});

export const deleteBook = (book) => {
  const URL = `${APP_URL}/${book.id}`;
  return fetch(URL, {
    method: 'DELETE',
  });
};

export default getBooksArr;
