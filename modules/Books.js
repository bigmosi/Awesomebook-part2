class Books {
  constructor(title, author) {
  // Initializing useful variables
    this.title = title;
    this.author = author;

    this.table = document.createElement('table');
    this.tbody = document.createElement('tbody');
    this.myForm = document.getElementById('form');
    this.bookList = document.getElementById('book-list');
    this.table.appendChild(this.tbody);
    this.bookList.appendChild(this.table);
    this.listTitle = document.querySelector('.list-title');

    this.bookData = (localStorage.book != null) ? JSON.parse(localStorage.book) : [];
  }

    addBook = () => {
      if (this.title.value === '' || this.author.value === '') {
        this.listTitle.innerHTML = 'Please fill the field below';
      } else {
        this.bookData.push({ bookTitle: this.title.value, bookAuthor: this.author.value });
        this.updateStore();
      }
    }

    removeBook = (event) => {
      this.bookData.splice(event.target.id, 1);
      this.updateStore();
      if (this.bookData.length === 0) {
        this.listTitle.innerHTML = 'Books List is empty';
      } else {
        this.listTitle.innerHTML = '';
      }
    }

    displayBooks = () => {
      this.tbody.innerHTML = '';
      let id = 0;

      this.bookData.forEach((book) => {
        this.tbody.innerHTML
          += ` 
            <tr>
            <td>
              <strong>"${book.bookTitle}"</strong>
              <span><strong>by ${book.bookAuthor}</strong></span>
            </td>
            <td class="remove" id=${id}>Remove</td>
            </tr> 
  `;
        id += 1;
      });
      this.registerDeletebuttons();
    }

    registerDeletebuttons = () => {
      if (this.bookData.length > 0) {
        const deleteButtons = document.querySelectorAll('.remove');
        deleteButtons.forEach((button) => button.addEventListener('click', this.removeBook));
      }
    }

    updateStore = () => {
      localStorage.book = JSON.stringify(this.bookData);
      this.displayBooks();
    }
}

export default Books;