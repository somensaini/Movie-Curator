const allowedOrigins = [
    "https://movie-curator.onrender.com",
    "https://movie-curator.onrender.com/",
    "https://movie-curator.onrender.com/dashboard",
    "https://movie-curator.onrender.com/login",
    "https://movie-curator.onrender.com/register",
    "https://movie-curator.onrender.com/*",
    "https://api.themoviedb.org",
    "https://onrender.com",
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
]

module.exports = allowedOrigins