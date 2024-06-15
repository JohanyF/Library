const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    let myBook = new Book(title, author, pages, read);
    myLibrary.push(myBook);
}

// Create a function that displays all of the books that are already preloaded in the array
function addPreLoadedBooks() {
    myLibrary.forEach((book) => {
        createCard(book);
    })
}

// Create a function that displays the book that was added to the array after it was added to the array
function addBook() {
    createCard(myLibrary[myLibrary.length-1]);
}

function createCard(obj) {
    const cardContainer = document.querySelector(".cards-container");
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute('id', myLibrary.indexOf(obj));

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
        readBtn.style.backgroundColor = "#a8ff69"

    } else {
        readBtn.textContent = "Not Read";
        readBtn.style.backgroundColor = "#ff6969";

    }
    cardBtns.appendChild(readBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("type", "button");
    deleteBtn.setAttribute("id", "removeBtn");
    deleteBtn.classList.add("card-btn");
    deleteBtn.textContent = "Remove";
    cardBtns.appendChild(deleteBtn);


    // Delete book 
    deleteBtn.addEventListener("click", () => {
        const removeCard = document.getElementById(`${myLibrary.indexOf(obj)}`);
        removeCard.remove();
        myLibrary.splice(myLibrary.indexOf(obj), 1);
        updateBookIDs();
    })

}

// Function updates each book id after one is removed
function updateBookIDs() {
    const bookCard = document.querySelectorAll(".card");
    bookCard.forEach((card, index=0) => {
        card.setAttribute('id', `${index}`);
        index++;
    })  
}


let testBook = new Book("1984", "George Orwell", 328, true);
let testBook2 = new Book("1985", "George Orwell", 328, false);
let testBook3 = new Book("1986", "George Orwell", 328, false);
let testBook4 = new Book("1987", "George Orwell", 328, true);

myLibrary.push(testBook);
myLibrary.push(testBook2);
myLibrary.push(testBook3);
myLibrary.push(testBook4);

addPreLoadedBooks();

const modal = document.querySelector("#modal");
const addBtn = document.querySelector(".add-btn");
const submitBtn = document.querySelector(".submit-btn")
const cancelBtn = document.querySelector(".cancel-btn")

const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const readInput = document.querySelector("#read");

addBtn.addEventListener("click", () => {
    modal.showModal();
});

cancelBtn.addEventListener("click" , (event) => {
    event.preventDefault();
    modal.close();
})

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, readInput.value);
    addBook();
    modal.close();
    document.bookForm.reset();
})









