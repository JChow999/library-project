const titleInput = document.querySelector("#book-title");
const authorInput = document.querySelector("#book-author");

const newBookBtn = document.querySelector("#new-book-btn");
const bookFormModal = document.querySelector("#book-form-modal");
const newBookForm = document.querySelector('#new-book-form');
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



newBookBtn.addEventListener('click', () => {
    bookFormModal.showModal();
})

document.addEventListener('click', function(e) {
    console.log(e.target)
    if (e.target === bookFormModal || e.target.classList.contains("close-form")) {
        bookFormModal.close();
    }
})

bookSubmit.addEventListener('click', () => {
    if (newBookForm.checkValidity()) {

        let newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.value)
        addBookToLibrary(newBook)
        bookFormModal.close();
    }
})

// Temporary
document.addEventListener("keydown", (e) => {
    if (e.key == "Enter") console.log(myLibrary)
})

function showBookOnSite() {
    console.log()
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
    console.log(myLibrary)
}

let hobbit = new Book("Hobbit", "Tolken", "200", true)
addBookToLibrary(hobbit)