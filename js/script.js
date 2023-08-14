'use strict';

let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

	while (
		numberOfFilms == '' ||
        numberOfFilms == null ||
        isNaN(numberOfFilms)
	) {
		return (numberOfFilms = +prompt(
			'Сколько фильмов вы уже посмотрели?',
			''
		));
	}
}
start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: true,
};

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt('Один из последних просмотренных фильмов?', ''),
			b = prompt('На сколько оцените его?', '');

		if (a != null && b != null && a != '' && b != '' && a.length < 50) {
			personalMovieDB.movies[a] = b;
			console.log('done');
		} else {
			console.log('error');
			i--;
		}
	}
}
rememberMyFilms();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log('Просмотренно довольно мало фильмов');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log('Вы класcический зритель');
	} else if (personalMovieDB.count >= 30) {
		console.log('Вы киноман');
	} else {
		console.log('Произошла ошибка');
	}
}
detectPersonalLevel();

function showMyDB(hidden) {
	if (!hidden) {
		return console.log(personalMovieDB);
	}
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
	for (let i = 0; i < 3; i++) {
		let userGenres = prompt(`Ваш любимый жанр под номеров ${i + 1}`);
		let b = Number(userGenres);

		if (isNaN(b) === false || userGenres === null) {
			alert('Напишите нормальный жанр');
			i--;
		} else {
			personalMovieDB.genres[i] = userGenres;
		}
	}
}
writeYourGenres();
