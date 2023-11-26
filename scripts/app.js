const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const moviePosterUrl = document.querySelector('.userInputPosterUrl');
const releaseDate = document.querySelector('.userInputDate');
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favoriteMovieTitle');
const movieDateToDisplay = document.querySelector('.favoriteMovieReleaseDate');


let titleInStorage = localStorage.getItem('title');
let imageUrlInStorage = localStorage.getItem('imageUrl');
let releaseDateInStorage = localStorage.getItem('releaseDate');
    
if(titleInStorage && imageUrlInStorage && releaseDateInStorage) {
    movieTitleToDisplay.textContent = titleInStorage;
    container.style.backgroundImage = `linear-gradient(rgba(51, 51, 82, 0.685), rgba(73, 49, 49, 0.582)), 
    url('${imageUrlInStorage}')`;
    movieDateToDisplay.textContent = releaseDateInStorage;
}



btn.addEventListener('click', () => {
    let movieTitleInput = movieTitle.value;
    let posterUrlInput = moviePosterUrl.value;
    let releaseDateInput = releaseDate.value;
    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('imageUrl', posterUrlInput);
    localStorage.setItem('releaseDate', releaseDateInput);
    movieTitleToDisplay.textContent = movieTitleInput;
    movieDateToDisplay.textContent = releaseDateInput;
    container.style.backgroundImage = `linear-gradient(rgba(51, 51, 82, 0.685), rgba(73, 49, 49, 0.582)), 
    url('${posterUrlInput}')`;
    movieTitle.value = '';
    moviePosterUrl.value = '';
    releaseDate.value = '';
});