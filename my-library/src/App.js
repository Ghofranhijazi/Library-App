
import React, { Component } from 'react';

const initState = {
  books : 
  [
          {
            id: 1,
            title:"مقدمة ابن خلدون ",
            author: "ابن خلدون ",
            isbn: "1289499030"
          },
          {
            id: 2,
            title :"الحاوي في الطب ",
            author: "ابو بكر الرازي ",
            isbn : "893847239479"
          },
          {
            id: 3,
            title: "الأغاني",
            author: "أبو الفرج الأصفهاني",
            isbn: "983748372948",
          },
          {
            id: 4,
            title: "كتاب سيبويه",
            author: "سيبويه",
            isbn: "384729847283",
          },
          {
            id: 5,
            title: "رسائل إخوان الصفا",
            author: "إخوان الصفا",
            isbn: "283749823749",
          },
  ],
};


class App extends Component {
  constructor(){
    super();
    this.state = initState;
  }

  render(){
    return(
      <div>
        <Header/>
        <Main books = {this.state.books} />
        <Footer/>
      </div>
    );
  }

}


class Header extends Component {
  render(){
    return(
      <header>
        <h1>Library Management App</h1>
      </header>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <footer>
        <p>© 2025 Library Management App</p>
      </footer>
    );
  }
}

class Main extends Component {
  render() {
    const { books } = this.props;
    return (
      <main>
        {books.map((book) => (
          <Card key={book.id} book={book} />
        ))}
      </main>
    );
  }
}

class Card extends Component {
  render() {
    const { book } = this.props;
    return (
      <div style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
        <h2>{book.title}</h2>
        <p><strong>Author:</strong> {book.author}</p>
        <p><strong>ISBN:</strong> {book.isbn}</p>
      </div>
    );
  }
}

export default App;
