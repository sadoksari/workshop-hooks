import MovieCard from "./MovieCard";

const MovieList = ( props ) => {
   return (
    <>
      { props.movies.map( (elem) => (   

              <MovieCard  title={ elem.title}  description ={ elem.description} 
                          posterUrl ={elem.posterUrl}  rate={ elem.rate }   
              /> )  )
      }
    </>
   )
}   

export default MovieList ;