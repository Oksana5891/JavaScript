// Створити 3 об’єкти, які описують книги. Поля об’єкту : title ,pageCount, genre, authors. Поле “автори” – являється  масивом. Кожен автор має поля name та age.

let book1 = {
    title: 'The Silent Patient',
    pageCount: 336,
    genre: 'Thriller',
    authors: [
        {
            name: 'Alex Michaelides',
            age: 49
        },
        {
            name: 'F. Scott Fitzgerald',
            age: 44
        }
    ]
};

let book2 = {
    title: 'Harry Potter and the Philosopher\'s Stone',
    pageCount: 223,
    genre: 'Fantasy',
    authors: [
        {
            name: 'J.K. Rowling',
            age: 62
        },
        {
            name: 'J.K. Rowling',
            age: 61
        }
    ]
};

let book3 = {
    title: 'The Martian',
    pageCount: 369,
    genre: 'Science Fiction',
    authors: [
        {
            name: 'Andy Weir',
            age: 54
        },
        {
            name: 'Andy Weir',
            age: 54
        }
    ]
};