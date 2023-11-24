const libraryDisp = document.querySelector(".library-display")

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

class Book {
    constructor(title, author, pages, read_status) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read_status = read_status;
    }
}

// Event listeners
newBookBtn.addEventListener('click', () => {
    bookFormModal.showModal();
})

document.addEventListener('click', function(e) {
    // console.log(e.target)
    if (e.target === bookFormModal || e.target.classList.contains("close-form")) {
        bookFormModal.close();
    }
})

bookSubmit.addEventListener('click', (e) => {
    e.preventDefault()
    checkBookValidity()
})

// Temporary
document.addEventListener("keydown", (e) => {
    if (e.key == "Enter") console.log(myLibrary)
})


//Functions

function checkBookValidity() {
    if (newBookForm.checkValidity()) {
        let newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.value)
        addBookToLibrary(newBook)
        bookFormModal.close();
    }
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
    bookTitle.value = "";
    bookAuthor.value = "";
    bookPages.value = "";
    bookRead.value = "";
    
    updateBookDisplay();
    console.log(myLibrary);
}

function updateBookDisplay() {
    libraryDisp.innerHTML = "";
    // console.log(bookInfo);
    for (let n = 0; n < myLibrary.length; n++) {
        let bookInfo = myLibrary[n];
        
        const newBookDisp = document.createElement('div');
        const newBookTitle = document.createElement("h3");
        const newBookPara = document.createElement("p");
        const newBookLabel = document.createElement("label");
        const newBookCheck = document.createElement("input");
        const newBookRemoveBtn = document.createElement("input");
        
        newBookDisp.setAttribute("class", "book");
        newBookDisp.setAttribute("data-index", myLibrary.indexOf(bookInfo));
        newBookTitle.textContent = `${bookInfo.title} by ${bookInfo.author}`;
        newBookPara.textContent = `Pages: ${bookInfo.pages}`;
        newBookLabel.textContent = "Book Read";
        
        newBookCheck.type = "checkbox";
        newBookCheck.checked = bookInfo.read_status;   
        newBookRemoveBtn.value = "Delete Book";
        
        newBookCheck.addEventListener("click", () => {
            console.log(newBookCheck.checked);
            myLibrary[newBookDisp.getAttribute("data-index")].read_status = newBookCheck.checked;
        })
        
        
        newBookRemoveBtn.addEventListener('click', () => {
            myLibrary.splice(newBookDisp.getAttribute("data-index"), 1);
            libraryDisp.removeChild(newBookDisp);
            console.log(myLibrary);
            updateBookDisplay();
        })
        
        newBookDisp.appendChild(newBookTitle);
        newBookDisp.appendChild(newBookPara);
        newBookDisp.appendChild(newBookLabel);
        newBookDisp.appendChild(newBookCheck);
        newBookDisp.appendChild(newBookRemoveBtn);
        
        libraryDisp.appendChild(newBookDisp);
    }
}

let hobbit = new Book("Hobbit", "J.R.R Tolken", 200, true)
let harryPot = new Book("Harry Potter", "J.K. Rowling", 463, false);
let levWakes = new Book("Leviathan Wakes", "James S. A. Corey", 577, true);
addBookToLibrary(hobbit)
addBookToLibrary(harryPot)
addBookToLibrary(levWakes)
