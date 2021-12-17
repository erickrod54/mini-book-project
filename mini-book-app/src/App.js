import React from 'react';
import './App.css';

/**This App js 'React Basic Events', events in react are called 'synthetic events' 
 * that's because mimic html as JSX, and this version will focus in how can i handle 
 * events with react, i will work with two events
 * 
 *    onMouseOver()
 *    onClick()
 * 
 * reference https://reactjs.org/docs/events.html
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
   * additional props, if i want selectively pass props i can pass direct to 
   * 'Book' component like this
   * 
   *     {img, title, author }  
   */

  const {img, title, author } = props;
  console.log(props);

  /**More Complex Example is a handler that i can use to pass whatever i need
   * from the 'books' JSON object
   */
   const complexExample = (author) => {
        console.log(author)
   }

  /**here i make the handler */
  const clickHandler = (e) => {
    /**this 'e' is a prop and when we apply 'e.target' refers the jsx element
     * in this case that contain the event, but i can use it to refer to any
     * element that i want to 'target'
    */
    console.log(e);
    console.log(e.target)
    alert('hello world')
  }
  return (

    /**this onMouseOver event every time that the mouse is over something trigger
     * the event and count the over, for this case print in javaConsole the title
     */
    <article className='book' onMouseOver={() => {
      console.log(title)
    }}>
    {/**Here i access the props using 'props.img', 'props.title', 'props.author' */}

    {/**this syntethic onClick event print on javaConsole the book title just
     * by doing click, this way is called 'inline event' */}
    <img onClick={() => console.log(title)} style={{width: 214, height: 300}}
        src={img}
        alt="" />
    <h1>{title}</h1>
    <h4>{author}</h4>

    {/** i can apply an event to any jsx element, this case i'll work with buttons*/}
    {/**i need attribute, and make an eventHandler, this is called 
     * 'Event as a reference' */}
    <button 
           type='button' 
           onClick={clickHandler}
           > Event as a reference </button>
    <button 
           type='button' 
           onClick={() => complexExample(author)}
           > More Complex Example </button>
  </article>
  );
}

export default App;
