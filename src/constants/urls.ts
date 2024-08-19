const baseURL = "https://api.themoviedb.org/3"
const movies = `${baseURL}/discover/movie?page=`
const genres = `${baseURL}/genre/movie/list`
const latest = `${baseURL}/movie/latest`
const topRated = `${baseURL}/movie/top_rated`
const popular = `${baseURL}/movie/popular`
const upComing = `${baseURL}/movie/upcoming`
const video = (movie_id:number) => `${baseURL}/movie/${movie_id}/videos`
const moviesByGenres = (genreIds:string) => `${baseURL}/discover/movie?with_genres=${genreIds}`
const posterOfMovie = (posterPath: string) => `https://image.tmdb.org/t/p/w500/${posterPath}`

const urls ={
    baseURL,
    movies,
    genres,
    latest,
    topRated,
    popular,
    upComing,
    video,
    moviesByGenres,
    posterOfMovie,
}

export {
    urls
}