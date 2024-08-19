import React, {FC} from 'react';
import "@/styles/style.upComingSection.css"
import UpComingItem from "@/components/upComingSection/upComingItem";

interface IProps {
    movies: IMovieAuthModel[]
}

const UpComingSection: FC<IProps> = ({movies}) => {
    return (
        <div>

            <h2> Soon</h2>
            <div className={"upcoming-section"}>
                {movies.map(movie => <UpComingItem key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
};

export default UpComingSection;