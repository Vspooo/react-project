import React, { FC } from 'react';
import Link from "next/link";
import "@/styles/style.upComingSection.css"


interface IProps {
    movie: IMovieAuthModel;
}

const MovieComponent: FC<IProps> = ({ movie }) => {
    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    return (
        <div className="grid-item">
            <h3>{movie.title}</h3>
            <Link
                href={{
                    pathname: `/movies/movie`,
                    query: { data: JSON.stringify(movie) }
                }}
            >
                <button> info</button>
            </Link>
        </div>
    );
};

export default MovieComponent;
