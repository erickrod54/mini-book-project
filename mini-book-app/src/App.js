import './App.css';

/**This App js file is the props version of the minibook app, and 
 * will allow to use the same component Book with different book data
 */

const title = 'The Mastery of Life: A Toltec Guide to Personal Freedom'
const author = 'don Miguel Ruiz Jr'
const img = 'https://m.media-amazon.com/images/I/51-Jv++qMdL._SY300_.jpg '

function App() {
  return (
    <section className='booklist'>
      {/**this attributes in the Book component represent props*/}
      <Book job='developer'/>
      <Book title='random title' number='22'/>
    </section>
  );
}

/**the arguments here for the book component are the props from above
 * and this way they're being passed to be accesed and render directly in
 * the respective component making our component unique
 */
const Book = (props) => {
  console.log(props)
  return (
    <article className='book'>
    {/**Here i made jsx more dynamic adding variables that i can change
     * or use methods on them like the case of toUpperCase
     */}
    <img 
        src={img}
        alt="" />
    <h1>{title}</h1>
    <h4>{author}</h4>
    <p>{props.job}</p>
    <p>{props.title}</p>
    <p>{props.number}</p>
  </article>
  );
}

export default App;
