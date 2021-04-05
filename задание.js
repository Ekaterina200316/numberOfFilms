let numberOfFilms;

function P(){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    }
}
P();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function rememberMyFilms(){
  for (let i = 0; i < 2; i++) {

    const a = prompt("Один из последних просмотренных фильмов?", ""),
    b = prompt("На сколько его оцените?", "");

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB[a] = b;
    } else {
    console.log('Error');
    i--;
    }

  }

}
rememberMyFilms();

function detectPersonalLevel(){
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
    } else {
    console.log("Произошла ошибка");
  }

}
detectPersonalLevel();

function showMyDB(){
    if(personalMovieDB.private == false){
        console.log(personalMovieDB); 
    }
}
showMyDB();

function writeYourGenres(){
    for(let i = 1; i <= 3; i++){
        const genres = prompt(`Ваш любимый жанр номер ${i}`);
        personalMovieDB.genres[i - 1] = genres;
    }
}
writeYourGenres();

console.log(personalMovieDB);