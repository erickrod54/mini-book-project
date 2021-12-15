import React from 'react';
import './App.css';

/**This App js version will focus in refactor the data, and how i map over an object
 * and its difference mapping over a list
 */

/**here i will create an array of books, with two books, and i can easily keep
 * adding more books
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
  }  
]


/**this approach is valid for arrays of simple data- names array example-, not objects, 
 * this will be as example then i'll do it with the object
 */
const names = ['Janelle','Laurie','Essie','Ramon','Peter']

/**then i can map over names, using a newNames const, and inside i can wrap it
 * in a jsx element, for this case an h1
 */
const newNames = names.map((name)=>{
  return <h1>{name}</h1>
});
console.log(newNames);
function App() {
  return (
    /**then i render i'll get nicely render */
    <section className='bookList'>{newNames}</section>
  );
}

const Book = (props) => {
  /**this is the first way in how i can destructure props, and children get 
   * prompted in java console within the component
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
