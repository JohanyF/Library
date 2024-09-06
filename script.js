const READ_COLOR = "#a8ff69";
const NOT_READ_COLOR = "#ff6969";

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

class Library {
  constructor() {
    this.myLibrary = [];
  }

  get getlibraryArr() {
    return this.myLibrary;
  }

  addBookToLibrary(title, author, pages, read) {
    let myBook = new Book(title, author, pages, read);
    this.myLibrary.push(myBook);
    createCard(this.myLibrary[this.myLibrary.length - 1]);
  }

  // Create a function that displays all of the books that are already preloaded in the array
  addPreLoadedBooks() {
    this.myLibrary.forEach((book) => {
      createCard(book);
    });
  }
}

function createCard(obj) {
  const cardContainer = document.querySelector(".cards-container");
  const card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("id", library.getlibraryArr.indexOf(obj));

  cardContainer.appendChild(card);

  const bookTitle = document.createElement("h2");
  bookTitle.textContent = obj.title;
  card.appendChild(bookTitle);

  const authorName = document.createElement("i");
  authorName.textContent = `by ${obj.author}`;
  card.appendChild(authorName);

  const totalPages = document.createElement("p");
  totalPages.classList.add("flex-one");
  totalPages.textContent = `${obj.pages} pages`;
  card.appendChild(totalPages);

  const cardBtns = document.createElement("div");
  cardBtns.classList.add("card-buttons");
  card.appendChild(cardBtns);

  const readBtn = document.createElement("button");
  readBtn.setAttribute("type", "button");
  readBtn.classList.add("card-btn");
  // console.log(obj);
  if (obj.read === true) {
    readBtn.textContent = "Read";
    readBtn.style.backgroundColor = READ_COLOR;
  } else {
    readBtn.textContent = "Not Read";
    readBtn.style.backgroundColor = NOT_READ_COLOR;
  }
  cardBtns.appendChild(readBtn);

  // Toggles between Read (true) and Not Read (false)
  readBtn.addEventListener("click", () => {
    obj.read = !obj.read;
    if (obj.read === true) {
      readBtn.textContent = "Read";
      readBtn.style.backgroundColor = READ_COLOR;
    } else {
      readBtn.textContent = "Not Read";
      readBtn.style.backgroundColor = NOT_READ_COLOR;
    }
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("type", "button");
  deleteBtn.setAttribute("id", "removeBtn");
  deleteBtn.classList.add("card-btn");
  deleteBtn.textContent = "Remove";
  cardBtns.appendChild(deleteBtn);

  // Delete book
  deleteBtn.addEventListener("click", () => {
    const removeCard = document.getElementById(
      `${library.getlibraryArr.indexOf(obj)}`
    );
    removeCard.remove();
    library.getlibraryArr.splice(library.getlibraryArr.indexOf(obj), 1);
    updateBookIDs();
  });
}

// Function updates each book id after one is removed
function updateBookIDs() {
  const bookCard = document.querySelectorAll(".card");
  bookCard.forEach((card, index = 0) => {
    card.setAttribute("id", `${index}`);
    index++;
  });
}

const modal = document.querySelector("#modal");
const addBtn = document.querySelector(".add-btn");
const submitBtn = document.querySelector(".submit-btn");
const cancelBtn = document.querySelector(".cancel-btn");

const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const readInput = document.querySelector("#read");

addBtn.addEventListener("click", () => {
  modal.showModal();
});

cancelBtn.addEventListener("click", (event) => {
  event.preventDefault();
  modal.close();
  document.bookForm.reset();
});

submitBtn.addEventListener("click", (event) => {
  // Form Validation
  if (titleInput.validity.valueMissing) {
    titleInput.setCustomValidity("Expecting a title");
    titleInput.reportValidity();
    event.preventDefault();
  } else if (authorInput.validity.valueMissing) {
    authorInput.setCustomValidity("Expecting Author Name!");
    authorInput.reportValidity();
    event.preventDefault();
  } else if (pagesInput.validity.valueMissing) {
    pagesInput.setCustomValidity("Expecting Page Number!");
    pagesInput.reportValidity();
    event.preventDefault();
  } else {
    event.preventDefault();
    library.addBookToLibrary(
      titleInput.value,
      authorInput.value,
      pagesInput.value,
      readInput.checked
    );
    modal.close();
    document.bookForm.reset();
  }
});

titleInput.addEventListener("input", () => {
  titleInput.setCustomValidity("");
});

authorInput.addEventListener("input", () => {
  authorInput.setCustomValidity("");
});

pagesInput.addEventListener("input", () => {
  pagesInput.setCustomValidity("");
});

const library = new Library();

library.addBookToLibrary("1984", "George Orwell", 328, true);
library.addBookToLibrary(
  "The Strange Case of Origami Yoda",
  "Tom Angleberger",
  141,
  true
);
library.addBookToLibrary("Diary of a Wimpy Kid", "Jeff Kinney", 221, false);
