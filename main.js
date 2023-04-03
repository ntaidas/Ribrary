// array with books inside that is displayed
const myLibrary = [];
const board = document.getElementById('display');

// Form Elements
const startForm = document.getElementById('big_plus');
const add = document.getElementById('add');
const bookName = document.querySelector('#book_name').value;
const author = document.getElementById('author').value;
const pages = document.getElementById('pages').value;
const read = document.getElementById('if_read').value;
const putBook = document.getElementById('put_book').value;

// Toggles between button and form
function addForm() {
  startForm.style.display = 'none';
  add.style.display = 'grid';
}
// Book constructor

function Book(title, author, pages, read = Boolean) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
// Example books Books

const book1 = new Book('aidas', 'aidas', 88, true);
const book2 = new Book('Haris Poteris', 'avril', '666', true);

myLibrary.push(book1);
myLibrary.push(book2);

// populates display with books
function populate() {
  for (const book of myLibrary) {
  // create card elements
    const card = document.createElement('div');
    card.setAttribute('class', 'card');
    card.innerHTML = `
    <p>${book.title}</p>
    <p>${book.author}</p>
    <p>${book.pages}</p>
    <div class="${read}"></div>
    `;
    const position = myLibrary.indexOf(book);
    console.log(position);
    // assign titles to elements
    if (this.read === true) {
      isRead.setAttribute('id', 'true');
    }

    // add elements
    display.appendChild(card);
    card.style.order = `${position + 1}`;
  }
}

function addBook(bookName, author, pages, read) {
  console.log(author);
  const book = new Book(`${bookName}`, `${author}`, `${pages}`, `${read}`);
  myLibrary.push(book);
  populate();
}

function addBookToLibrary(input) {
  myLibrary.push(input);
}

startForm.addEventListener('click', addForm);

addBook('papas', 'lapas', 10, true);
putBook.addEventListener('click', addBook);
