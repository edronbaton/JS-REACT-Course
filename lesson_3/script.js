/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно */

'use strict';
let numberOfFilms;

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB)
    }
}

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}:`, ""))
    }
}


function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
    
    return numberOfFilms
}

let personalMovieDB = {
    count: start(),
    movies: {},
    actors: {},
    genres: [],
    privat: Boolean(false)
}

personalMovieDB.count = numberOfFilms


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов")
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель")
    } else if (personalMovieDB.count > 30) {
        console.log("Вы киноман")
    } else {
        console.log("Произошла ошибка")
    }
}   



function rememberMyFilms() {
    for (let i = 1; i <= 2; i++) {
        const nameOfMovie = prompt("Один из последних просмотренных фильмов?", ""),
            ratingOfMovie = prompt("На сколько оцените его?", "")
    
        if (nameOfMovie != null && ratingOfMovie != null && nameOfMovie != '' && ratingOfMovie != '' && nameOfMovie.length <= 50) {
            personalMovieDB.movies[nameOfMovie] = ratingOfMovie
        } else {
            console.log("Ошибка..")
            i--
        }
    }

    console.log("Вы успешно прошли опрос")
}

writeYourGenres()
rememberMyFilms()
detectPersonalLevel()
showMyDB(personalMovieDB.privat);



