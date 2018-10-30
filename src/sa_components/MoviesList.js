import React from 'react';
import PropTypes from 'prop-types';

const MoviesList=({movies})=> {
    const emptyMesage=(
        <p>Hiç bir film bulunamadı</p>
    )
    const moviesLists=(
        <div>MoviesList</div>
    )
    return( 
        <div>
        {movies.length === 0 ? emptyMesage : moviesLists}
        </div>
        
        
    )
    
}

MoviesList.propTypes={
    movies: PropTypes.array.isRequired
}; 
export default MoviesList;
