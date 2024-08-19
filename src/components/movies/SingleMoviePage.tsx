import React, { FC } from 'react';
import MovieRating from "@/components/movies/movieRating";
import "@/styles/style.singleMoviePage.css";

interface IProps {
    movie: IMovieAuthModel;
    genres: { [key: number]: string };
    trailerKey: string | null;
}

const SingleMoviePage: FC<IProps> = ({ movie, genres, trailerKey }) => {
    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const startRating = Math.min(movie.popularity / 1000, 10);
    const imdbRating = Math.min(movie.popularity / 1000, 10).toFixed(1);

    if (!movie.id || !movie.title || !movie.overview || !movie.popularity || !movie.release_date || !movie.genre_ids) {
        return <p>No info about movie. Try again later</p>;
    }

    return (
        <div className="container">
            <div className="movieInfo">
                <h1 className="title">{movie.original_title}</h1>
                <div className="content">
                    <img src={posterUrl} alt={`${movie.title}'s poster`} className="poster" />
                    <div>
                        <ul>
                            <li><strong>Popularity:</strong> {movie.popularity}</li>
                            <li><strong>Release Date:</strong> {movie.release_date}</li>
                        </ul>
                        {movie.genre_ids.length > 0 ? (
                            <ul>
                                {movie.genre_ids.map(id => (
                                    <li key={id}>{genres[id] || "Unknown Genre"}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>No genres available</p>
                        )}
                        <MovieRating rating={startRating} imdb_rating={imdbRating} />
                    </div>
                </div>
                <div className="overview">
                    <p>{movie.overview}</p>
                </div>
            </div>

                <div className="trailerContainer">
                    <h3>Trailer</h3>
                    <div className="trailer">
                        <iframe
                            src={`https://www.youtube.com/embed/${trailerKey}`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="YouTube video player"
                        />
                    </div>
                </div>
        </div>
    );
};

export default SingleMoviePage;
