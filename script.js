const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    const title = prompt("Enter book title: ");
    const author = prompt("Enter author name: ");
    const pages = prompt("Enter page number: ");
    const read = prompt("Did you read this book (Yes/No): ");
    
    let myBook = new Book(title, author, pages, read);
    console.log(myBook);

    myLibrary.push(myBook);
    console.log(myLibrary);
}

// Create a function that displays all of the books that are already preloaded in the array
function addPreLoadedBooks() {
    myLibrary.forEach((book) => {
        createCard(book);
    })
}

// Create a function that displays the book that was added to the array after it was added to the array
function addBook() {

}

function createCard(obj) {
    const cardContainer = document.querySelector(".cards-container");
    const card = document.createElement("div");
    card.classList.add("card");

    cardContainer.appendChild(card);

    const bookTitle = document.createElement("h2");
    bookTitle.textContent = obj.title;
    card.appendChild(bookTitle);

    const authorName = document.createElement("i");
    authorName.textContent = `by ${obj.author}`;
    card.appendChild(authorName);

    const totalPages = document.createElement("p");
    totalPages.textContent = `${obj.pages} pages`;
    card.appendChild(totalPages);

    const cardBtns = document.createElement("div");
    cardBtns.classList.add("card-buttons")
    card.appendChild(cardBtns);

    const readBtn = document.createElement("button");
    readBtn.setAttribute("type", "button");
    readBtn.classList.add("card-btn");
    if(obj.read === true) {
        readBtn.textContent = "Read";
    } else {
        readBtn.textContent = "Not Read";
    }
    cardBtns.appendChild(readBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("type", "button");
    deleteBtn.classList.add("card-btn");
    deleteBtn.textContent = "Remove";
    cardBtns.appendChild(deleteBtn);
}

// addBookToLibrary();

let testBook = new Book("1984", "George Orwell", 328, true);
// let testBook2 = new Book("1984", "George Orwell", 328, false);
// let testBook3 = new Book("1984", "George Orwell", 328, false);
// let testBook4 = new Book("1984", "George Orwell", 328, true);

myLibrary.push(testBook);
// myLibrary.push(testBook2);
// myLibrary.push(testBook3);
// myLibrary.push(testBook4);
// console.log(myLibrary);

addPreLoadedBooks();

