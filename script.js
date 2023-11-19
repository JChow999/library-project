const titleInput = document.querySelector("#book-title");
const authorInput = document.querySelector("#book-author");

const addNewBtn = document.querySelector("#new-book-form");
const bookForm = document.querySelector("#book-form");
const showBookForm = document.querySelector('#new-book-form');
const modalBackdrop = document.querySelector(".modal-backdrop");

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

addNewBtn.addEventListener('click', () => {
    bookForm.style.display = "block";
})

document.addEventListener('click', function(e) {
    console.log(e.target)
    if (e.target.classList.contains("modal-backdrop") || e.target.classList.contains("close-form")) {
        bookForm.style.display = "none";
    }
})

document.addEventListener("keydown", (e) => {
    if (e.key == "Enter") console.log(myLibrary)
})

let hobbit = new Book("Hobbit", "Tolken", "200", true)
addBookToLibrary(hobbit)