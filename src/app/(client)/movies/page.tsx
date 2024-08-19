import React from 'react';
import "@/styles/style.movies-recomendation.css"
import "@/styles/style.generalMoviesWrap.css"
import "@/styles/style.mainContainer.css"
import "@/styles/style.global.css"
import {movieApiService} from '@/services/movie.api.service';
import MoviesComponent from '@/components/movies/MoviesComponent';
import PaginationComponent from '@/components/pagination/PaginationComponent';
import SearchComponent from "@/components/search/SearchComponent";
import GenresComponent from "@/components/genres/GenresComponent";
import TrendingAndTopRatedComponent from "@/components/trendingAndTopRated/trendingAndTopRatedComponent";
import WhatsNewSection from "@/components/whatsNewSection/whatsNewSection";
import UpComingSection from "@/components/upComingSection/upComingSection";
import TopRatedMovieComponent from "@/components/topRatedMovie/topRatedMovieComponent";


const MoviesMainPage = async ({searchParams}: { searchParams: { page?: string; search?: string; genre?: string } }) => {
    const page = (searchParams.page) || 1;
    const initialGenreId = searchParams.genre ? parseInt(searchParams.genre) : 0
    const {results, page: apiPage, total_pages} = await movieApiService.getAllMovies(+page);
    const trendingMovies = results.slice(0, 6)
    const {results: topRatedMovies} = await movieApiService.getTopRatedMovies()
    const topRatedMovie = topRatedMovies[0]
    const {genres} = await movieApiService.getAllGenres()
    const latestMovie = await movieApiService.getLatestMovie()
    const {results: upcomingMovies} = await movieApiService.getUpComingMovies()


    return (
        <div className={"main-container"}>
            <SearchComponent initialQuery={searchParams.search || ""}/>
            <GenresComponent genres={genres} initialGenre={initialGenreId}/>


            <div className={"general-movies-wrap"}>
                <div className={"movies-recommendation"}>
                    <TrendingAndTopRatedComponent movies={trendingMovies} title={"Trending"}/>
                    <TopRatedMovieComponent movie={topRatedMovie}/>
                    <TrendingAndTopRatedComponent movies={topRatedMovies} title={"Top Rated Movies"}/>
                </div>

                <div className={"movies-hotPicks"}>
                    <WhatsNewSection movie={latestMovie}/>
                    <UpComingSection movies={upcomingMovies}/>
                </div>
            </div>




            <MoviesComponent movies={results}/>
            <PaginationComponent
                currentPage={apiPage}
                totalPages={total_pages}
            />
        </div>
    );
};

export default MoviesMainPage