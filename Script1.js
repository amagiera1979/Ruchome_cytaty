// JavaScript source code
const quotes = [
    { "quote": "To, �e milcz�, nie znaczy, �e nie mam nic do powiedzenia.", "author": "Jonathan Carroll" },
    { "quote": "Lepiej zalicza� si� do niekt�rych, ni� do wszystkich.", "author": "Andrzej Sapkowski" },
    { "quote": "Czytanie ksi��ek to najpi�kniejsza zabawa, jak� sobie ludzko�� wymy�li�a.", "author": "Wis�awa Szymborska " },
    { "quote": "Ksi��ki s� lustrem: widzisz w nich tylko to co, ju� masz w sobie.", "author": "Carlos Ruiz Zaf�n" },
    { "quote": "Strach tnie g��biej ni� miecze.", "author": "George R.R. Martin" },
    { "quote": "Je�eli robisz to co �atwe, Twoje �ycie b�dzie trudne. Je�li robisz to co trudne, Twoje �ycie b�dzie �atwe.", "author": "Les Brown" }
];

const colors = [
    '#ff8080',
    '#c299ff',
    '#ff884d',
    '#85e0e0',
    '#66cc00',
    '#339966'
];

var currentQuote = '';
var currentAuthor = '';
var currentColor = '';

function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function getMyQuote() {
    let myQuote = getRandomQuote();

    currentQuote = myQuote.quote;
    currentAuthor = myQuote.author;

    $("#text").animate({ opacity: 0 }, 200, function () {
        $(this).animate({ opacity: 1 }, 200);
    });

    $("#text").fadeIn(200, function () {
        $(this).text(currentQuote);
    });

    $("#author").animate({ opacity: 0 }, 200, function () {
        $(this).animate({ opacity: 1 }, 200);
    });

    $(".text_author").fadeIn(200, function () {
        $(this).text(currentAuthor);
    });

    currentColor = colors[Math.floor(Math.random() * colors.length)];

    $('body').css('backgroundColor', currentColor);
    $('.color').css('backgroundColor', currentColor);
    $('.text').css('color', currentColor);
}

$(document).ready(function () {
    getMyQuote();
    $('#new-quote').on('click', getMyQuote);
});

