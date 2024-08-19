import React, {FC} from 'react';
import Link from "next/link";
import "@/styles/style.whatsNewSection.css"

interface IProps {
movie : IMovieAuthModel
}
const WhatsNewSection:FC<IProps> = ({movie}) => {
    // NOTE: оскільки отриманий фільм не має зображення, тому додаю інше
    const posterUrl = `https://image.tmdb.org/t/p/w500//ybM400b3vesnoNzOlTlAmHeEYPq.jpg`;

    return (
        <div className={"whats-new-section"}>
            <h2>What`s New</h2>
            <div>
                <img src={posterUrl} alt={`${movie.title}'s poster`} width={154} height={220}/>
                <h3>{movie.title}</h3>
                <Link href={
                    {
                        pathname : `/movies/movie`,
                        query : {data: JSON.stringify(movie)}
                    }
                }>More info</Link>
            </div>
        </div>
    );
};

export default WhatsNewSection;