import {urls} from "@/constants/urls";
import {fetchWithAuth} from "@/services/apiService";

const movieApiService= {
    getAllMovies : async(page:number):Promise<IMoviePaginatedModel> => {
        const response = await fetchWithAuth(`${urls.movies}${page}`)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json()
    }
}

export {movieApiService}