import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import '../App.css';
import { Grid } from 'semantic-ui-react';
import {BounceLoader} from 'react-spinners';

    
const MoviesList=({movies, onDeleteMovie})=> {
    const emptyMesage=(
        <p>Hiç bir film bulunamadı</p>
    );
   
    const moviesLists=(
      
       
        <div className="body"  >
            <BounceLoader color={'#005577'} loading={movies.fetching }  /> 
            
            {  
              movies.error.request ? <h4>Bir Hatta oluştu</h4> :
              
                <Grid  columns={3}>
                
                    { movies.movieList.map(movie=>
                      <MovieCard 
                      key={movie._id} 
                      onDeleteMovie={onDeleteMovie}
                      movie={movie} />)} 

                </Grid> 
             
            }
        </div>
       
    );
    return( 
        <div>
        {movies.length === 0 ? emptyMesage : moviesLists}
        </div>
        
        
    )
    
}

MoviesList.propTypes={
    movies: PropTypes.shape({
        movieList: PropTypes.array.isRequired
    }).isRequired
}; 
export default MoviesList;
