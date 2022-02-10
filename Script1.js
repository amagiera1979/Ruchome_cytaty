// JavaScript source code
const quotes = [
    { "quote": "To, ¿e milczê, nie znaczy, ¿e nie mam nic do powiedzenia.", "author": "Jonathan Carroll" },
    { "quote": "Lepiej zaliczaæ siê do niektórych, ni¿ do wszystkich.", "author": "Andrzej Sapkowski" },
    { "quote": "Czytanie ksi¹¿ek to najpiêkniejsza zabawa, jak¹ sobie ludzkoœæ wymyœli³a.", "author": "Wis³awa Szymborska " },
    { "quote": "Ksi¹¿ki s¹ lustrem: widzisz w nich tylko to co, ju¿ masz w sobie.", "author": "Carlos Ruiz Zafón" },
    { "quote": "Strach tnie g³êbiej ni¿ miecze.", "author": "George R.R. Martin" },
    { "quote": "Je¿eli robisz to co ³atwe, Twoje ¿ycie bêdzie trudne. Jeœli robisz to co trudne, Twoje ¿ycie bêdzie ³atwe.", "author": "Les Brown" }
];

var currentQuote = '';
var currentAuthor = '';

function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function getMyQuote() {
    let myQuote = getRandomQuote();

    currentQuote = myQuote.quote;
    currentAuthor = myQuote.author;
}

$(document).ready(function () {
    getMyQuote();
});

