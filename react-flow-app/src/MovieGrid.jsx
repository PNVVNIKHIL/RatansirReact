//import Moviecard from "./MovieCard";

import Moviecard from "./MovieCard";

function MovieGrid() {
    
    const movies = [

        {  name: "Devara",director:"koratala" },
        { name: "Salaar",director:"prasanthneel"  },
        {  name: "Pushpa", director:"sukumar" }
      ];

    
                       
                        
      return(
        <>
          {movies.map((movie,index) => <Moviecard key={index} moviecard={movie}/> )}
        </>
      )
} 
  export default MovieGrid;
   