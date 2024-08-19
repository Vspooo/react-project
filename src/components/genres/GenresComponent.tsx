"use client";
import React, { FC, useState } from 'react';
import { useRouter } from 'next/navigation';
import "@/styles/style.genreComponent.css"

interface IProps {
    genres: IGenreModel[],
    initialGenre?: number
}

const GenresComponent: FC<IProps> = ({ genres, initialGenre }) => {
    const router = useRouter();
    const [selectedGenres, setSelectedGenres] = useState<number[]>(initialGenre ? [initialGenre] : []);

    const toggleGenreSelection = (genreId: number) => {
        if (selectedGenres.includes(genreId)) {
            setSelectedGenres(selectedGenres.filter(id => id !== genreId));
        } else {
            setSelectedGenres([...selectedGenres, genreId]);
        }
    };

    const handleSave = () => {
        const selectedGenresString = selectedGenres.join(",");
        router.push(`/movies/genre?genres=${selectedGenresString}`);
    };

    const handleReset = () => {
        setSelectedGenres([]);
    };

    return (
        <div>
            <div className={"genres-wrap"}>
                {genres.map(genre =>
                    <button
                        className={`genre-selector ${selectedGenres.includes(genre.id) ? 'selected' : ''}`}
                        key={genre.id}
                        onClick={() => toggleGenreSelection(genre.id)}
                    >
                        {genre.name}
                    </button>
                )}
            </div>
            <div className={"genre-buttons"}>
                <button
                    className={"genres-btn"}
                    onClick={handleSave}
                    disabled={selectedGenres.length === 0}
                >
                    Save
                </button>
                <button onClick={handleReset} className={"genres-btn"}>Reset</button>
            </div>
        </div>
    );
};

export default GenresComponent;
