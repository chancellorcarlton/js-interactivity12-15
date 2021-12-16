let message = document.querySelector('#message')

//add movie function
const addMovie = (e) => {
    e.preventDefault();
    let inputField = document.querySelector('input');
    let movie = document.createElement('li');
    let movieTitle = document.createElement('span');
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener('click', crossOffMovie);
    movie.appendChild(movieTitle);
    //deleteBtn
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x';
    deleteBtn.addEventListener('click', deleteMovie);
    movie.appendChild(deleteBtn);
    //deleteBtn
    let ul = document.querySelector('ul');
    ul.appendChild(movie);
    inputField.value = '';
}
  
document.querySelector('form').addEventListener('submit', addMovie);

//delete movie function

const deleteMovie = (e) => {
    e.target.parentNode.remove();
    message.textContent = 'Movie Deleted!'
}
//delete movie function

//cross off movie function
const crossOffMovie = (e) => {
    e.target.classList.toggle('checked');
    if (e.target.classList.contains('checked')){
        return message.textContent = 'Movie watched'
    } else {
        return message.textContent = 'Movie added back!'
    }
}

