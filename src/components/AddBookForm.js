import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

// Included for the purpose of using the app.
// Will eventually be substituted by actual functionality.
const defaultBookInfo = {
  chapters: 20,
  currentChapter: Math.round(Math.random() * 19) + 1,
  category: 'Fantasy',
};

const AddBookForm = () => {
  const [input, setInput] = useState({
    title: '',
    author: '',
  });

  const handleTextChange = (field) => (e) => {
    setInput((state) => ({
      ...state,
      [field]: e.target.value,
    }));
  };

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...input,
      ...defaultBookInfo,
      id: uuidv4(),
    };
    dispatch(addBook(payload));
    setInput((state) => ({
      ...state,
      title: '',
      author: '',
    }));
  };

  return (
    <div>
      <h2>Add New Book</h2>
      <form className="add-book-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book title"
          name="title"
          value={input.title}
          onChange={handleTextChange('title')}
        />
        <input
          type="text"
          placeholder="Author"
          value={input.author}
          name="author"
          onChange={handleTextChange('author')}
        />
        <select placeholder="Category">
          <option value="Fiction">Fiction</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Magic Realism">Magic Realism</option>
          <option value="Essay">Essay</option>
        </select>
        <button type="submit">Add book </button>
      </form>
    </div>
  );
};

export default AddBookForm;
