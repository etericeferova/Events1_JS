const bookList = document.getElementById("bookList");
let selectedBook = null;

bookList.addEventListener("click", (event) => {
  const clickedBook = event.target;

  if (clickedBook.tagName === "LI") {
    if (selectedBook) {
      selectedBook.style.backgroundColor = "";
    }
    clickedBook.style.backgroundColor = "orange";
    selectedBook = clickedBook;
  }
});
