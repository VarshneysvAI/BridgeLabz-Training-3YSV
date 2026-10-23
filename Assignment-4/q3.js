"use strict";

class Book {
  constructor(title, author, isbn, isIssued = false) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isIssued = isIssued;
  }

  issueBook() {
    if (this.isIssued) {
      return false;
    }
    this.isIssued = true;
    return true;
  }

  returnBook() {
    this.isIssued = false;
  }
}

const books = [
  new Book("The Alchemist", "Paulo Coelho", "ISBN001"),
  new Book("Clean Code", "Robert Martin", "ISBN002"),
  new Book("1984", "George Orwell", "ISBN003", true),
];

const requestedIsbn = "ISBN002";
const requestedBook = books.find((book) => book.isbn === requestedIsbn);
if (requestedBook && requestedBook.issueBook()) {
  console.log(`Issued book: ${requestedBook.title}`);
} else {
  console.log("Book is unavailable or ISBN was not found.");
}

console.log("Available books:");
books
  .filter((book) => !book.isIssued)
  .forEach((book) => console.log(`${book.title} by ${book.author} (${book.isbn})`));
