const titleInput = document.querySelector("#book-title");
const authorInput = document.querySelector("#book-author");

const newBookBtn = document.querySelector("#new-book-form");
const bookForm = document.querySelector("#book-form");
const showBookForm = document.querySelector('#new-book-form');
const modalBackdrop = document.querySelector(".modal-backdrop");

const bookTitle = document.querySelector("#book-title");
const bookAuthor = document.querySelector("#book-author");
const bookPages = document.querySelector("#book-pages");
const bookRead = document.querySelector("#book-read");
const bookSubmit = document.querySelector("#submit-book")

const myLibrary = [];


function Book(title, author, pages, read_status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read_status = read_status;
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
    console.log(myLibrary)
}

newBookBtn.addEventListener('click', () => {
    bookForm.showModal();
})

document.addEventListener('click', function(e) {
    console.log(e.target)
    if (e.target === bookForm || e.target.classList.contains("close-form")) {
        bookForm.close();
    }
})

document.addEventListener("keydown", (e) => {
    if (e.key == "Enter") console.log(myLibrary)
})

let hobbit = new Book("Hobbit", "Tolken", "200", true)
addBookToLibrary(hobbit)