import React from 'react';
import './App.css';

/**This App js version 1 (one) will focus in refactor the data, and how i map over 
 * an JSON object for hte case of the books object */

/**here i will create an array of books, with two books, and i can easily keep
 * adding more books, this version 1 (one) of refactor data, has a warning
 * 
 *  'index.js:1 Warning: Each child in a list should have a unique "key" prop.'
 * 
 * this will be fixed in the version 2 (two) of refactor the data
 */
const books = [
  {
    img : 'https://m.media-amazon.com/images/I/51-Jv++qMdL._SY300_.jpg ',
    title: 'The Mastery of Life: A Toltec Guide to Personal Freedom',
    author: 'don Miguel Ruiz Jr'
  },
  {
    img : 'https://images-na.ssl-images-amazon.com/images/I/51NsRhI4llL._SX348_BO1,204,203,200_.jpg ',
    title: 'The Four Agreements Companion Book: Using the Four Agreements to Master the Dream of Your Life (Toltec Wisdom)',
    author: ' don Miguel Ruiz (Author), Janet Mills'
  },
  {
    img : 'https://m.media-amazon.com/images/I/41lAPQqRZOL.jpg',
    title: 'Eros',
    author: ' Barbara Emrys (Author), Miguel Ruiz (Author)'
  }  
]

function App() {
  return (
    /**first i map the 'books' JSON object where my books data live,
     * and get them throught a prop calle 'book'
     */
    <section className='bookList'>{books.map((book) => {
      return (
        /** this way i send the 'books' data as a props and a get them in the
         * 'Book' component */
        <Book book={book}></Book>
      );
    })}
    </section>
  );
}

const Book = (props) => {
  /**i set the props with the prop that i'm looking for this case 'book' and 
   * will be set as 'props.book'
   */
  const {img, title, author } = props.book;
  console.log(props);
  return (
    <article className='book'>
    {/**Here i access the props using 'props.img', 'props.title', 'props.author' */}
    <img style={{width: 214, height: 300}}
        src={img}
        alt="" />
    <h1>{title}</h1>
    <h4>{author}</h4>

  </article>
  );
}

export default App;
