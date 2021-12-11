import './App.css';

function App() {
  return (
    <section>
      {/**here we render the component
       * that has inside nested components
       * and will act as a booklist
       */}
      <Book />

    </section>
  );
}

const Book = () => {
  /**here i create variables to facilate quickly changes in my code */
  const title = 'The Mastery of Life: A Toltec Guide to Personal Freedom'
  const author = 'don Miguel Ruiz Jr'
  return (
    <article className='book'>
    {/**Here i made jsx more dynamic adding variables that i can change
     * or use methods on them like the case of toUpperCase
     */}
    <img 
        src="https://m.media-amazon.com/images/I/51-Jv++qMdL._SY300_.jpg" 
        alt="" />
    <h1>{title}</h1>
    <h4>{author.toUpperCase()}</h4>
    <p>{6 + 6}</p>
  </article>
  );
}

export default App;
