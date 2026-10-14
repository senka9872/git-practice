// Початковий масив бібліотеки
let library = [
    {
        title: "1984",
        author: "Джордж Орвелл",
        year: 1949,
        genre: "Дистопія",
        available: true
    },
    {
        title: "Гаррі Поттер і філософський камінь",
        author: "Дж. К. Ролінґ",
        year: 1997,
        genre: "Фентезі",
        available: false
    },
    {
        title: "Володар перснів",
        author: "Дж. Р. Р. Толкін",
        year: 1954,
        genre: "Фентезі",
        available: true
    },
    {
        title: "Код да Вінчі",
        author: "Ден Браун",
        year: 2003,
        genre: "Детектив",
        available: true
    },
    {
        title: "Маленький принц",
        author: "Антуан де Сент-Екзюпері",
        year: 1943,
        genre: "Філософія",
        available: false
    }
];

// Функція для додавання книги
function addBook(library, newBook) {
    library.push(newBook);
    console.log(`Книга "${newBook.title}" додана до бібліотеки.`);
}

// Функція для видалення книги за назвою
function removeBook(library, title) {
    const index = library.findIndex(book => book.title === title);

    if (index === -1) {
        console.log("Книга не знайдена.");
        return;
    }

    library.splice(index, 1);
    console.log(`Книга "${title}" видалена.`);
}

// Функція для пошуку книг за автором
function findBooksByAuthor(library, author) {
    const foundBooks = library.filter(book =>
        book.author.toLowerCase().includes(author.toLowerCase())
    );

    if (foundBooks.length === 0) {
        console.log("Книги цього автора не знайдені.");
    } else {
        console.log(`Книги автора "${author}":`);

        foundBooks.forEach(book => {
            console.log(
                `- ${book.title} (${book.year}, ${book.genre}, ` +
                `${book.available ? "Доступна" : "Видана"})`
            );
        });
    }

    return foundBooks;
}

// Функція для підрахунку загальної кількості книг
const getTotalBooks = library => library.length;

// Функція для зміни статусу доступності книги
function toggleAvailability(library, title) {
    const book = library.find(book => book.title === title);

    if (!book) {
        console.log("Книга не знайдена.");
        return;
    }

    book.available = !book.available;

    console.log(
        `Статус книги "${title}" змінено: ` +
        `${book.available ? "Доступна" : "Видана"}.`
    );
}

// Асинхронна функція для демонстрації асинхронності
async function showLibraryAsync(library) {
    console.log("Завантаження списку книг...");

    await new Promise(resolve => setTimeout(resolve, 500));

    console.log("Список книг:");
    library.forEach(book => {
        console.log(
            `- ${book.title} | Автор: ${book.author} | ` +
            `Рік: ${book.year} | Жанр: ${book.genre} | ` +
            `Статус: ${book.available ? "Доступна" : "Видана"}`
        );
    });
}

// Демонстрація роботи програми
console.log("=== Менеджер бібліотеки книг ===");

// Додавання книги
const newBook = {
    title: "Шерлок Холмс",
    author: "Артур Конан Дойл",
    year: 1887,
    genre: "Детектив",
    available: true
};

addBook(library, newBook);

// Пошук книг за автором
findBooksByAuthor(library, "Дж. К. Ролінґ");

// Підрахунок книг
console.log(`Загальна кількість книг: ${getTotalBooks(library)}`);

// Зміна статусу книги
toggleAvailability(library, "1984");

// Видалення книги
removeBook(library, "1984");

// Спроба видалити неіснуючу книгу
removeBook(library, "Невідома книга");

// Повторний підрахунок
console.log(`Загальна кількість книг після видалення: ${getTotalBooks(library)}`);

// Виведення списку книг асинхронно
showLibraryAsync(library);