import React from 'react';
import { books } from "./books.data";
import Book from "../src/components/Book/book.component";
import './App.css';

/**This App.js is the final version, i create
 * a file structure using 'code splitting', 
 * importing '{ books }' -this is where the data
 * lives, as a not default export must be imported
 * exactly by its name-.
 * 
 * the case of the Book component as a default 
 * export, i can change the name of the component
 * in the importing destination without affecting 
 * the app behavior .. try it with Book13
*/

function App() {
  return (
    <section className='bookList'>{books.map((book) => {
      return (
        <Book key={book.id}{...book}></Book>
      );
    })}
    </section>
  );
}



export default App;
