import React from 'react';
import './App.css';

/**This App js file is the third props version of the minibook app, and 
 * will cover lines related with how i destructured props
 */

/**here i will create two different books 'firstBook' and 'secondBook' */
const firstBook = {
  img : 'https://m.media-amazon.com/images/I/51-Jv++qMdL._SY300_.jpg ',
  title: 'The Mastery of Life: A Toltec Guide to Personal Freedom',
  author: 'don Miguel Ruiz Jr'
}

const secondBook = {
  img : 'https://images-na.ssl-images-amazon.com/images/I/51NsRhI4llL._SX348_BO1,204,203,200_.jpg ',
  title: 'The Four Agreements Companion Book: Using the Four Agreements to Master the Dream of Your Life (Toltec Wisdom)',
  author: ' don Miguel Ruiz (Author), Janet Mills'
}

function App() {
  return (
    <section className='bookList'>
      {/**this attributes in the Book component represent props*/}

      {/**Using the generic Book component i render
       * using 'img','title','author' props for each 
       * different book
       */}
      <Book 
          img={firstBook.img}
          title={firstBook.title}
          author={firstBook.author}
          />
      <Book img={secondBook.img}
            title={secondBook.title}
            author={secondBook.author}
            />
    </section>
  );
}

/**the arguments here for the book component are the props from above
 * and this way they're being passed to be accesed and render directly in
 * the respective component making our component unique
 */


/**this is the second way to destructure props, directly passing props
 * throught the component*/
const Book = ({img, title, author }) => {
  /**this is the first way in how i can destructure props */
  //const {img, title, author } = props
  console.log({img, title, author })
  return (
    <article className='book'>
    {/**Here i access the props using 'props.img', 'props.title', 'props.author' */}
    <img 
        src={img}
        alt="" />
    <h1>{title}</h1>
    <h4>{author}</h4>
  </article>
  );
}

export default App;
