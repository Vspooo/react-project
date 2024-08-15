import React, {FC} from 'react';

interface IProps {
    movie : IMovieAuthModel
}
const MovieComponent:FC<IProps> = ({movie}) => {
    return (
        <div>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
            <ul>
                <li>{movie.popularity}</li>
                <li>{movie.release_date}</li>
            </ul>
        </div>
    );
};

export default MovieComponent;