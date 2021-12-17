import React from "react";
import "../Book/book.styles.css";

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

export default Book;
