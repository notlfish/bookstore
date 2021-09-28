import React from 'react';

const AddBookForm = () => (
  <div>
    <h2>Add New Book</h2>
    <form className="add-book-form">
      <input type="text" placeholder="Book title" />
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

export default AddBookForm;
