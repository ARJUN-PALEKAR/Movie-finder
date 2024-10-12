const apiKey = '4e01bc1be90197f061eca835f0aad603'; 
const searchButton = document.getElementById('searchBtn');
const searchInput = document.getElementById('search');
const resultsContainer = document.getElementById('results');


searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
        searchMovies(query);
    } else {
        alert('Please enter a movie name');
    }
});


function searchMovies(query) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => displayMovies(data.results))
        .catch(error => {
            console.error('Error fetching data from TMDB API:', error);
        });
}


function displayMovies(movies) {
    resultsContainer.innerHTML = ''; 
    
    if (movies.length === 0) {
        resultsContainer.innerHTML = '<p>No movies found. Try another search.</p>';
        return;
    }

    
    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');

        const posterPath = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'placeholder.jpg'; 
        
        movieElement.innerHTML = `
            <img src="${posterPath}" alt="${movie.title} poster">
            <h3>${movie.title}</h3>
            <p>Release Date: ${movie.release_date || 'N/A'}</p>
        `;
        
        resultsContainer.appendChild(movieElement);
    });
}
const API_KEY = '3fd2be6f0c70a2a598f084ddfb75487c';
const RECOMMEND_API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const recommendationContainer = document.getElementById('recommendation-container');


getRecommendedMovies(RECOMMEND_API_URL);

async function getRecommendedMovies(url) {
    const res = await fetch(url);
    const data = await res.json();
    showRecommendedMovies(data.results);
}

function showRecommendedMovies(movies) {
    movies.forEach((movie) => {
        const { title, poster_path, overview } = movie;

        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');

        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="overview">
                <h3>Overview</h3>
                <p>${overview}</p>
            </div>
        `;

        recommendationContainer.appendChild(movieEl);
    });
}
function displayMovies(movies) {
    resultsContainer.innerHTML = ''; 

    if (movies.length === 0) {
        resultsContainer.innerHTML = '<p>No movies found. Try another search.</p>';
        return;
    }

    
    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');

        const posterPath = movie.poster_path 
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
            : 'placeholder.jpg'; 
        
        movieElement.innerHTML = `
            <img src="${posterPath}" alt="${movie.title} poster">
            <h3>${movie.title}</h3>
            <p>Release Date: ${movie.release_date || 'N/A'}</p>
            <div class="overview">
                <h3>Overview</h3>
                <p>${movie.overview || 'No overview available.'}</p>
            </div>
        `;

        resultsContainer.appendChild(movieElement);
    });
}
