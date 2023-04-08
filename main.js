/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unneeded-ternary */
// array with books inside that is displayed
const myLibrary = [];
const board = document.getElementById("display");

// Form Elements
const bigPlus = document.getElementById("big_plus");
const addBook = document.getElementById("add_book");
const formCard = document.getElementById("add_to_library");

// Toggles between button and form
function addForm() {
  bigPlus.style.display = "none";
  formCard.style.display = "grid";
}
// Book constructor
bigPlus.addEventListener("click", addForm);

function Book(title, author, pages, read = Boolean) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.display = function () {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
      <p>Title: ${this.title}</p>
      <p>Author: ${this.author}</p>
      <p>Pages: ${this.pages}</p>
      <div class="read-status${this.read ? " read" : ""}"></div>
    `;
  document.getElementById("display").appendChild(card);
};
// Example books Books

const book1 = new Book("aidas", "aidas", 88, true);
const book2 = new Book("Haris Poteris", "avril", "666", true);

myLibrary.push(book1);
myLibrary.push(book2);

// populates display with books
function populate() {
  const container = document.querySelector("#board");
  for (let book of myLibrary) {
    // create card element
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <p>Title: ${book.title}</p>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <div class="read-status${book.read ? " read" : ""}"></div>
    `;
    const position = myLibrary.indexOf(book);
    // assign order to card
    card.style.order = `${-position}`;
    // add card to container
    container.appendChild(card);
  }
}

populate();

function refresh() {
  const container = document.querySelector("#board");
  const lastBook = myLibrary[myLibrary.length - 1];
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <p>Title: ${lastBook.title}</p>
    <p>Author: ${lastBook.author}</p>
    <p>Pages: ${lastBook.pages}</p>
    <div class="read-status${lastBook.read ? " read" : ""}"></div>
  `;
  const position = myLibrary.indexOf(lastBook);
  card.style.order = `${-position}`;
  container.appendChild(card);
}

//

addBook.addEventListener("click", (event) => {
  event.preventDefault();
  const formData = new FormData(formCard);
  const title = formData.get("title");
  const author = formData.get("author");
  const pages = formData.get("pages");
  const read = formData.get("if_read");
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
  document.getElementById("add_to_library").reset();
  // add new card to board
 refresh()
});
