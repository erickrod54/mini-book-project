import React from 'react';
import './App.css';

/**This App js version 2 (two) will focus in refactor the data, and how i map over 
 * an JSON object for hte case of the books object */

/** this version fix a warning 
 *  
 *  'index.js:1 Warning: Each child in a list should have a unique "key" prop.' 
 * 
 * we have to add an unique 'id' to each 'book' in my 'books' JSON object 
 */

const books = [
  {
    id:1,
    img : 'https://m.media-amazon.com/images/I/51-Jv++qMdL._SY300_.jpg ',
    title: 'The Mastery of Life: A Toltec Guide to Personal Freedom',
    author: 'don Miguel Ruiz Jr'
  },
  {
    id:2,
    img : 'https://images-na.ssl-images-amazon.com/images/I/51NsRhI4llL._SX348_BO1,204,203,200_.jpg ',
    title: 'The Four Agreements Companion Book: Using the Four Agreements to Master the Dream of Your Life (Toltec Wisdom)',
    author: ' don Miguel Ruiz (Author), Janet Mills'
  },
  {
    id:3,
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
         * 'Book' component, in this new approach i'll do it with spread operator*/

        /**as part of the book i have to set the 'key' prop that will be
         * 'book.id' */
        <Book key={book.id}{...book}></Book>
      );
    })}
    </section>
  );
}

const Book = (props) => {
  /**i set the props with the prop that i'm looking for this case 'book' in this
   * approach as i did with spread operator '{...book}', is already passing 
   * everything that a book has 'img', 'title', 'author' and if i add will pass 
   * additional props  
   */
  const {img, title, author } = props;
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
