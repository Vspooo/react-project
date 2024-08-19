import React from 'react';
import {movieApiService} from "@/services/movie.api.service";
import MoviesComponent from "@/components/movies/MoviesComponent";

const GenrePage = async ({searchParams} : {searchParams : {genres?:string}}) => {
    const genre =searchParams.genres ? searchParams.genres.split(",").map(Number) : []
    const {results} =  await movieApiService.getMoviesByGenres(genre+"")
    return (
        <div>
            <MoviesComponent movies={results}/>
        </div>
    );
};

export default GenrePage;