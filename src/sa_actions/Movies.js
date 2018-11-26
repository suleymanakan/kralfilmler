import axios from 'axios';
import { API_PATH } from '../sa_config/Ifadeler';

export const FETCH_MOVIES_PENDING = "FETCH_MOVIES_PENDING";
export const FETCH_MOVIES_FULFILLED = "FETCH_MOVIES_FULFILLED";
export const FETCH_MOVIES_REJECTED = "FETCH_MOVIES_REJECTED";

export const DELETE_MOVIE_PENDING = "DELETE_MOVIE_PENDING";
export const DELETE_MOVIE_FULFILLED = "DELETE_MOVIE_FULFILLED";
export const DELETE_MOVIE_REJECTED = "DELETE_MOVIE_REJECTED";

export function fetchMovies(){
    return dispatch => {
        
       dispatch({
          type: "FETCH_MOVIES",
          payload: axios.get(`${API_PATH}/movies`)
          .then(result=>result.data.movies)
      })
    }
};

export function onDeleteMovie(id){
    return dispatch => {
        dispatch({
            type : "DELETE_MOVİE",
            payload: axios.delete(`${API_PATH}/movies/${id}`)
            .then(result=> Object.assign({}, result, {id}))
        })
    }
}




/* axios.get(API_PATH+"/movies")
         .then(result=>result.data)
         .then(data=>dispatch({
             type:FETCH_MOVIES_FULFILLED,
             payload: data.movies
         }))
         .catch(error=>dispatch({
             type:FETCH_MOVIES_REJECTED,
             payload:error
         }))*/