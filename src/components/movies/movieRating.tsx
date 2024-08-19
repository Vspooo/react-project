"use client"
import React, {FC} from 'react';
import StarRatings from "react-star-ratings";

interface IProps {
    rating : number,
    imdb_rating : string
}
const MovieRating:FC<IProps> = ({rating, imdb_rating}) => {
    return (
        <div>
           <StarRatings name={"movie-rating"} rating={rating} numberOfStars={10} starRatedColor={"gold"} starEmptyColor={"gray"} starDimension={"25"}/>
            <div className={"imdb-rating"}>or IMDB {imdb_rating}</div>
        </div>
    );
};

export default MovieRating;