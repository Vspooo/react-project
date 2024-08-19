import React from 'react';
import MovieComponent from "@/components/movies/MovieComponent";

const MoviePage = ({searchParams}:any) => {
    const movie = JSON.parse(searchParams.data)
    return (
        <div>
            <MovieComponent key={movie.id} movie={movie}/>
        </div>
    );
};

export default MoviePage;