// array with books inside that is displayed
let myLibrary = [];
const board = document.getElementById("display");

//Form Elements
let startForm = document.getElementById("big_plus");
let add = document.getElementById("add");
let bookName = document.querySelector("#book_name").value;
let author = document.getElementById("author").value;
let pages = document.getElementById("pages").value;
let read = document.getElementById("if_read").value;
let submitbook = document.getElementById("submit").value;

//Toggles between button and form
function addForm() {
  startForm.style.display = "none";
  add.style.display = "grid";
}
//Book constructor

function Book(title, author, pages, read = Boolean) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
//Example books Books

let book1 = new Book("aidas", "aidas", 88, true);
let book2 = new Book("Haris Poteris", "avril", "666", true);

myLibrary.push(book1);
myLibrary.push(book2);

//populates display with books
for (let book of myLibrary) {
  //create card elements
  let card = document.createElement("div");
  card.setAttribute("class", "card");
  let booktitle = document.createElement("p");
  let writer = document.createElement("p");
  let pages = document.createElement("p");
  let isRead = document.createElement("div");
  let position = myLibrary.indexOf(book);
  console.log(position);
  isRead.setAttribute("id", "false");
  // assign titles to elements
  booktitle.innerText = `${book.title}`;
  writer.innerText = `${book.author}`;
  pages.innerText = `${book.pages}`;
  if (this.read === true) {
    isRead.setAttribute("id", "true");
  }
  // add elements
  card.appendChild(booktitle);
  card.appendChild(writer);
  card.appendChild(pages);
  card.appendChild(isRead);
  display.appendChild(card);
  card.style.order = `${position + 1}`;
}

function addBook(bookName, author, pages, read) {
  let book = new Book(`${bookName}`, `${author}`, `${pages}`, `${read}`);
  myLibrary.push(book);
}

function addBookToLibrary(input) {
  myLibrary.push(input);
}

startForm.addEventListener("click", addForm);
submitbook.addEventListener("submit", addBook)
