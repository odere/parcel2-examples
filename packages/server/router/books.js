const { readFile, writeFile } = require('fs').promises;

const books = [
    {
        method: 'GET',
        path: '/books',
        options: {
            handler: async (request, h) => {
                const books = await readFile('./data/books.json', 'utf8');
                return h.response(JSON.parse(books)).code(200);
            }
        }
    },
    {
        method: 'POST',
        path: '/books',
        options: {
            handler: async (request, h) => {
                const book = JSON.parse(request.payload);
                let books = await readFile('./data/books.json', 'utf8');
                books = JSON.parse(books);
                // setting id
                book.id = books.length + 1;
                books.push(book);
                await writeFile('./books.json', JSON.stringify(books, null, 2), 'utf8');
                return h.response(books).code(200);
            }
        }
    },
    {
        method: 'PUT',
        path: '/books/{id}',
        options: {
            handler: async (request, h) => {
                const updBook = JSON.parse(request.payload);
                const id = request.params.id;
                let books = await readFile('./data/books.json', 'utf8');
                books = JSON.parse(books);
                // finding book by id and rewriting
                books.forEach((book) => {
                    if (book.id == id) {
                        book.title = updBook.title;
                        book.author = updBook.author;
                    }
                });
                await writeFile('./books.json', JSON.stringify(books, null, 2), 'utf8');
                return h.response(books).code(200);
            }
        }
    },
    {
        method: 'DELETE',
        path: '/books/{id}',
        options: {
            handler: async (request, h) => {
                const updBook = JSON.parse(request.payload);
                const id = request.params.id;
                let books = await readFile('./data/books.json', 'utf8');
                books = JSON.parse(books);
                // rewriting the books array
                books = books.filter(book => book.id != id);
                await writeFile('./books.json', JSON.stringify(books, null, 2), 'utf8');
                return h.response(books).code(200);
            }
        }
    }
]

module.exports = books;
