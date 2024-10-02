// script.js

document.getElementById('searchBtn').addEventListener('click', function() {
    const movieName = document.getElementById('search').value;
    const apiKey = '5fdb59e5'; 
    const url = `https://www.omdbapi.com/?s=${encodeURIComponent(movieName)}&apikey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = ''; 

            if (data.Response === "True") {
                data.Search.forEach(movie => {
                    const movieElement = document.createElement('div');
                    movieElement.classList.add('movie');

                    movieElement.innerHTML = `
                        <h3>${movie.Title} (${movie.Year})</h3>
                        <img src="${movie.Poster}" alt="${movie.Title} poster" />
                    `;

                    resultsDiv.appendChild(movieElement);
                });
            } else {
                resultsDiv.innerHTML = `<p>No movies found.</p>`;
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('results').innerHTML = `<p>Error fetching data.</p>`;
        });
});