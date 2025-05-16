    "use strict";

    const API_URL = "https://api.tvmaze.com/shows";
    const searchInput = document.getElementById("searchInput");
    const sortSelect = document.getElementById("sortSelect");
    const moviesContainer = document.getElementById("moviesContainer");
    const errorMessage = document.getElementById("errorMessage");

    let movies = [];

    async function fetchMovies() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
        throw new Error("Не вдалося отримати дані з сервера.");
        }
        const data = await response.json();
        movies = data;
        renderMovies(movies);
    } catch (error) {
        errorMessage.textContent = error.message;
    }
    }

    function renderMovies(moviesList) {
    moviesContainer.innerHTML = "";
    moviesList.forEach(({ name, image, rating, genres }) => {
        const card = document.createElement("div");
        card.className = "movie-card";
        card.innerHTML = `
        <img src="${image?.medium || "https://via.placeholder.com/210x295"}" alt="${name}" />
        <div class="card-body">
            <h3>${name}</h3>
            <p>Жанри: ${genres.join(", ")}</p>
            <p>Рейтинг: ${rating.average || "Немає"}</p>
        </div>
        `;
        moviesContainer.appendChild(card);
    });
    }

    function filterMovies() {
    const searchTerm = searchInput.value.toLowerCase();
    const filtered = movies.filter(({ name }) =>
        name.toLowerCase().includes(searchTerm)
    );
    sortAndRender(filtered);
    }

    function sortAndRender(moviesToRender) {
    const sortBy = sortSelect.value;
    let sorted = [...moviesToRender];

    if (sortBy === "name") {
        sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "rating") {
        sorted.sort((a, b) => (b.rating.average || 0) - (a.rating.average || 0));
    }

    renderMovies(sorted);
    }

    searchInput.addEventListener("input", filterMovies);
    sortSelect.addEventListener("change", filterMovies);

    fetchMovies();