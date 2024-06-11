import MovieCard from "./MovieCard";

function MovieList ({MoviesTable}) {
    return(
        MoviesTable.map(j => {
            let object = JSON.parse(j);
            return <MovieCard Title = {object.title} Description={object.description} PosterURL={object.posterURL} Rating={object.rating} key = {object.title}></MovieCard>
        })
    );
}

export default MovieList;