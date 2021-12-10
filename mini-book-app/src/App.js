import './App.css';

function App() {
  return (
    <section>
      {/**here we render the component
       * that has inside nested components
       * and will act as a booklist
       */}
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return <article>
    {/**Here we nested 3 different components */}
    <Image />
    <Title />
    <Author/>
  </article>
}

const Image = () => {
  return <img 
  src="https://m.media-amazon.com/images/I/51-Jv++qMdL._SY300_.jpg" alt="" />
}

const Title = () => <h2>The Mastery of Life: A Toltec Guide to Personal Freedom</h2>

const Author = () => <h3>don Miguel Ruiz Jr</h3>

export default App;
