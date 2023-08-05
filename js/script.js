'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

let lastFilm = prompt('Один из последних просмотренных фильмов?', '');
let gradeOfFilms = prompt('На сколько оцените его?', '');
personalMovieDB.movies[lastFilm] = gradeOfFilms;

lastFilm = prompt('Один из последних просмотренных фильмов?', '');
gradeOfFilms = prompt('На сколько оцените его?', '');
personalMovieDB.movies[lastFilm] = gradeOfFilms;


console.log(personalMovieDB);

