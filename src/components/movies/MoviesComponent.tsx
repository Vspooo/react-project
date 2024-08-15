import React, {FC} from 'react';
import MovieComponent from "@/components/movies/MovieComponent";
interface IProps {
    movies : IMovieAuthModel[]
}
const MoviesComponent:FC<IProps> = ({movies}) => {
    return (
        <div>
            {movies.map(movie => <MovieComponent key={movie.id} movie={movie}/>)}
        </div>
    );
};

export default MoviesComponent;