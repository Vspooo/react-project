import React from 'react';
import MoviesComponent from "@/components/movies/MoviesComponent";
import {movieApiService} from '@/services/movie.api.service';

const SearchPage = async ({ searchParams }: { searchParams: { search?: string } }) => {
    const query = searchParams.search || "";
    const allMovies = await movieApiService.getAllMovies(1);
    const filteredMovies = allMovies.results.filter(movie =>
        movie.title.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div>
            <MoviesComponent movies={filteredMovies} />
        </div>
    );
};

export default SearchPage;
