import React, { useState } from 'react';
import BooksList from './BooksList';
import AddBookForm from './AddBookForm';

const Bookstore = () => {
  const [books] = useState([
    {
      id: 1,
      title: 'The Castle',
      author: 'Franz Kafka',
      chapters: 22,
      currentChapter: 5,
      category: 'Surrealism',
    },
    {
      id: 2,
      title: 'Rayuela',
      author: 'Julio Cortázar',
      chapters: 35,
      // Progress can't always be computed from the number of chapters and
      // the current chapter
      currentChapter: 6,
      category: 'Magical Realism',
    },
    {
      id: 3,
      title: 'Mutaciones de la Realidad',
      author: 'Olga Orozco',
      // The very idea of a chapter may not make sense
      chapters: 40,
      currentChapter: 12,
      category: 'Lyric Poetry',
    },
  ]);

  return (
    <div>
      <BooksList books={books} />
      <AddBookForm />
    </div>
  );
};

export default Bookstore;
