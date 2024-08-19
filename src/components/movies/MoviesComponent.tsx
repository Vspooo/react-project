import React, {FC} from 'react';
import MovieComponent from "@/components/movies/MovieComponent";
import "@/styles/style.movies.css"

interface IProps {
    movies: IMovieAuthModel[]
}

const MoviesComponent: FC<IProps> = ({movies}) => {
    return (
        <div>
            <h2>Films</h2>
            <div className={"movies-grid"}>
                {movies.map(movie => <MovieComponent key={movie.id} movie={movie}/>)}

            </div>
        </div>
    );
};

export default MoviesComponent;