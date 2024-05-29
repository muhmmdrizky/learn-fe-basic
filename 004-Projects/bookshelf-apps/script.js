document.addEventListener("DOMContentLoaded", () => {
  const bookForm = document.getElementById("book-form");
  const incompleteBookshelf = document.getElementById("incomplete-bookshelf");
  const completeBookshelf = document.getElementById("complete-bookshelf");
  const searchInput = document.getElementById("search");

  const STORAGE_KEY = "BOOKSHELF_APPS";
  let books = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

  // Fungsi untuk menyimpan data ke localStorage
  const saveData = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
  };

  // Fungsi untuk membersihkan rak buku lalu menambahkan elemen buku ke rak sesuai status (complete atau incomplete)
  const renderBooks = () => {
    incompleteBookshelf.innerHTML = "";
    completeBookshelf.innerHTML = "";

    for (let book of books) {
      const bookElement = createBookElement(book);
      if (book.isComplete) {
        completeBookshelf.append(bookElement);
      } else {
        incompleteBookshelf.append(bookElement);
      }
    }
  };

  // Fungsi untuk membuat elemen buku
  const createBookElement = (book) => {
    const bookElement = document.createElement("div");
    bookElement.classList.add("book");
    bookElement.innerHTML = `
            <div>
                <h3>${book.title}</h3>
                <p><strong>Penulis:</strong> ${book.author}</p>
                <p><strong>Tahun terbit:</strong> ${book.year}</p>
            </div>
            <div>
                <button class="isComplete" onclick="toggleBook('${book.id}')">${book.isComplete ? "Belum selesai dibaca" : "Selesai dibaca"}</button>
                <button class="delete" onclick="deleteBook('${book.id}') ">Hapus</button>
            </div>
        `;
    return bookElement;
  };

  // Fungsi untuk menambahkan buku
  const addBook = (book) => {
    books.push(book);
    saveData();
    renderBooks();
  };

  // Fungsi untuk mengubah status buku
  const toggleBook = (bookId) => {
    const book = books.find((book) => book.id === bookId);
    book.isComplete = !book.isComplete;
    saveData();
    renderBooks();
  };

  // Fungsi untuk menghapus buku
  const deleteBook = (bookId) => {
    books = books.filter((book) => book.id !== bookId);
    saveData();
    renderBooks();
  };

  // Fungsi untuk pencarian buku
  const searchBooks = (query) => {
    const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(query.toLowerCase()));
    incompleteBookshelf.innerHTML = "";
    completeBookshelf.innerHTML = "";
    for (let book of filteredBooks) {
      const bookElement = createBookElement(book);
      if (book.isComplete) {
        completeBookshelf.append(bookElement);
      } else {
        incompleteBookshelf.append(bookElement);
      }
    }
  };

  // Proses penyimpanan buku
  bookForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const id = new Date().getTime().toString();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const year = Number(document.getElementById("year").value);
    const isComplete = document.getElementById("isComplete").checked;

    const newBook = { id, title, author, year, isComplete };
    addBook(newBook);

    console.log(newBook);
    bookForm.reset();
  });

  searchInput.addEventListener("input", (event) => {
    searchBooks(event.target.value);
  });

  window.toggleBook = toggleBook;
  window.deleteBook = deleteBook;

  renderBooks();
});
