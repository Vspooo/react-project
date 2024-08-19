import {urls} from "@/constants/urls";
import {fetchWithAuth} from "@/services/apiService";

const MAX_PAGES = 500
const movieApiService= {
    getAllMovies : async(page:number):Promise<IMoviePaginatedModel> => {
        const response = await fetchWithAuth(`${urls.movies}${page}`)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result : IMoviePaginatedModel = await response.json() as IMoviePaginatedModel
        const adjustedTotalPages = Math.min(result.total_pages, MAX_PAGES)
        return {...result, total_pages: adjustedTotalPages}
    },
    getAllGenres : async() : Promise<IGenreResponseModel> =>{
        const response = await fetchWithAuth(urls.genres)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json()
    },
    getMoviesByGenres : async (genreIds: string) : Promise<IMoviePaginatedModel> =>{
        const response = await fetchWithAuth(urls.moviesByGenres(genreIds))
        if (!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json()
    },
    getPosterOfMovie : async (posterPath : string) => {
        const response = await fetchWithAuth(urls.posterOfMovie(posterPath))
        if (!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response
    },
    getLatestMovie : async () : Promise<IMovieAuthModel> =>{
        const response = await fetchWithAuth(urls.latest)
        if (!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json()
    },
    getTopRatedMovies : async(): Promise<IMoviePaginatedModel> =>{
        const response = await fetchWithAuth(urls.topRated)
        if (!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json()
    },
    getPopularMovies : async(): Promise<IMoviePaginatedModel> =>{
        const response = await fetchWithAuth(urls.popular)
        if (!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json()
    },
    getUpComingMovies : async() : Promise<IUpComingMovieModel> => {
        const response = await fetchWithAuth(urls.upComing)
        if (!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json()
    },
    getMovieVideos : async (movie_id:number) : Promise<IVideoResponse> => {
        const response = await fetchWithAuth(urls.video(movie_id))
        if (!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json()
    }

}

export {movieApiService}