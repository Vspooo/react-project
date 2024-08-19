"use client";
import React, { FC, useState } from 'react';
import { useRouter } from 'next/navigation';
import "@/styles/style.searchInput.css"
import SearchIcon from '@mui/icons-material/Search';

interface IProps {
    initialQuery: string;
}

const SearchComponent: FC<IProps> = ({ initialQuery }) => {
    const router = useRouter();
    const [query, setQuery] = useState<string>(initialQuery);

    const handleSearch = () => {
        router.push(`/movies/search?search=${query}`);
    };

    return (
        <div className={"search-wrap"}>
            <input
                className={"search-input"}
                type="text"
                placeholder="Search for movies"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSearch} disabled={!query.trim()}><SearchIcon></SearchIcon></button>

        </div>
    );
};

export default SearchComponent;
