import React, {FC} from 'react';
import MovieComponent from "@/components/movies/MovieComponent";
import "@/styles/style.trendingAndTopRatedComponent.css"

interface IProps {
    movies: IMovieAuthModel[];
    title: string;
}

const TrendingAndTopRatedComponent: FC<IProps> = ({movies, title}) => {
    const firstSixMovies = movies.slice(0, 6);
    return (
        <div>
            <h2>{title}</h2>
            <div className="movies-container">
                {firstSixMovies.map(movie => (
                    <MovieComponent key={movie.id} movie={movie}/>
                ))}
            </div>
        </div>
    );
};

export default TrendingAndTopRatedComponent;
