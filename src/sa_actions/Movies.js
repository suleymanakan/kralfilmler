import axios from 'axios';
import { API_PATH } from '../sa_config/Ifadeler';

export const FETCH_MOVIES_PENDING = "FETCH_MOVIES_PENDING";
export const FETCH_MOVIES_FULFILLED = "FETCH_MOVIES_FULFILLED";
export const FETCH_MOVIES_REJECTED = "FETCH_MOVIES_REJECTED";

export function fetchMovies(){
    return dispatch => {
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
        
       dispatch({
          type: "FETCH_MOVIES",
          payload: axios.get(`${API_PATH}/movies`)
          .then(result=>result.data.movies)
      })
    }
};