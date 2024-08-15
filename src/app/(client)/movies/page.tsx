import React from 'react';
import {movieApiService} from "@/services/movie.api.service";
import MoviesComponent from "@/components/movies/MoviesComponent";

const MoviesPage =async () => {
    const {results, page} = await movieApiService.getAllMovies(1)
    return (
        <div>
            <MoviesComponent movies={results}/>
            current page : {page}
        </div>
    );
};

export default MoviesPage;