import React, {FC} from 'react';

interface IProps {
    movie: IMovieAuthModel
}

import "@/styles/style.topRatedMovieComponent.css"

const TopRatedMovieComponent: FC<IProps> = ({movie}) => {
    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    return (
        <div className={"topRatedMovie-wrap"}>
            <img src={posterUrl} alt={`${movie.title}'s poster`}/>
            <section className={"topRatedMovie-section"}>
                <div className={"topRatedMovie-titleAndRating"}>
                    <p>{movie.title}</p>
                    <p>{movie.popularity}</p>
                </div>
                <div className={"topRatedMovie-meta"}>
                    <p>{movie.release_date}</p>
                    <p>list of genres</p>
                </div>
                <div className={"topRatedMovie-desc"}>
                    {movie.overview}
                </div>
                <button> details</button>
            </section>
        </div>
    );
};

export default TopRatedMovieComponent;