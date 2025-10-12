const library = [
  { name: "John", books: ["Book A", "Book B"] },
  { name: "Jane", books: ["Book C"] },
  { name: "Doe", books: ["Book D", "Book E"] }
];
console.log("function 1",collectBooks(library));
console.log("function 2",findBooksCollection(library));
console.log("function 3",findBooks(library));


function collectBooks(arr){
    const books = arr.flatMap(person=> person.books);
    return books;
}

function findBooksCollection(arr){
    const books = arr.map(person=> person.books);
    return books.flat();
}
function findBooks(library){
    const allBooks = [];

for (const person of library) {
  allBooks.push(...person.books); 
}
return allBooks
    
}


