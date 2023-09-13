'use strict';

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function() {
		this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
		while (this.count === '' || this.count === null || isNaN(this.count)) {
			this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
		}
	},
	rememberMyFilms: function() {
		qwerty: for (let i = 0; i < 2; i++) {
			let a = prompt('Один из последних просмотренных фильмов?', '').trim();
			
			if (a === null || a === '') {
				alert('Вы ввели пустое значение');
				i--;
				continue qwerty;
				
			} else if (a.length > 50) {
				alert('Слишком длинное название');
				i--;
				continue qwerty;
			} 
			let b = +prompt('На сколько оцените его?', '').trim();
			
			if (isNaN(b)) {
				alert('Введите число');
				i--;
				continue qwerty;
			} else if (b === null || b === '') {
				alert('Вы ввели пустое значение');
				i--;
				continue qwerty;
			}
			
			this.movies[a] = b;
			
		}
	},
	detectPersonalLevel: function() {
		if (this.count < 10) {
			alert('Просмотрено довольно мало фильмов');
		} else if (this.count >= 10 && this.count <= 30) {
			alert('Вы классический зритель');
		} else if (this.count > 30)  {
			alert('Вы киноман');
		} else {
			alert('Произошла ошибка');
		}
	},
	showMyDB: function() {
		if (!this.privat) {
			console.log(personalMovieDB);
		}
	},
	writeYourGenres: function() {
		for (let i = 0; i < 3; i++) {
			this.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}?`, '');
			if (this.genres[i] === null || this.genres[i] === '') {
				alert('Введите значение');
				i--;
			}

		}
		this.genres.forEach((a, i) => {
			console.log(`Любимый жанр ${i + 1} - это ${a}`);
		});
	},
	toggleVisibleMyDB: function() {
		if (this.privat === false) {
			this.privat = true;
		} else {
			this.privat = false;
		}
	}

};

personalMovieDB.start();

personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonalLevel();

personalMovieDB.writeYourGenres();

personalMovieDB.toggleVisibleMyDB();

personalMovieDB.showMyDB();



