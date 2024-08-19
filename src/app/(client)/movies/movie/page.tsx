import React from 'react';
import SingleMoviePage from "@/components/movies/SingleMoviePage";
import {movieApiService} from "@/services/movie.api.service";


const MoviePage = async ({searchParams} : any) => {
    const movie = JSON.parse(searchParams.data)
  const {genres} =  await movieApiService.getAllGenres()
   const genreMap = genres.reduce((acc : { [key : number] : string}, gender : {id : number, name : string}) => {
        acc[gender.id] = gender.name
        return acc
    }, {})

    const videos = await movieApiService.getMovieVideos(movie.id);

   const trailer=  videos.results.find((video : IVideoModel) => video.type === "Trailer" && video.site === "YouTube")
   const key = trailer ? trailer.key : null

    return (
        <div>
          <SingleMoviePage movie={movie} genres={genreMap} trailerKey={key}/>
        </div>
    );
};

export default MoviePage;