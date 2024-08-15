interface IMoviePaginatedModel {
    results : IMovieAuthModel[],
    page : number
    total_pages: number;
    total_results: number;
}