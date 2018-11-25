import axios from 'axios';
import { API_PATH } from '../sa_config/Ifadeler';

export const NEW_MOVİE_PENDING = "NEW_MOVİE_PENDING";
export const NEW_MOVİE_FULFILLED = "NEW_MOVİE_FULFILLED";
export const NEW_MOVİE_REJECTED = "NEW_MOVİE_REJECTED";

export const FETCH_MOVİE_PENDING = "FETCH_MOVİE_PENDING";
export const FETCH_MOVİE_FULFILLED = "FETCH_MOVİE_FULFILLED";
export const FETCH_MOVİE_REJECTED = "FETCH_MOVİE_REJECTED";

export const UPDATE_MOVİE_PENDING = "UPDATE_MOVİE_PENDING";
export const UPDATE_MOVİE_FULFILLED = "UPDATE_MOVİE_FULFILLED";
export const UPDATE_MOVİE_REJECTED = "UPDATE_MOVİE_REJECTED";

export function postNewMovie({title, cover}){
    return dispatch => {
       dispatch({
          type: "NEW_MOVİE",
          payload: axios.post(`${API_PATH}/movies`, {//Post Method
              title,cover
          })
         
      })
    }
};

export function onUpdateMovieSumbit({_id, title, cover}){
    return dispatch => {
       dispatch({
          type: "UPDATE_MOVİE",
          payload: axios.put(`${API_PATH}/movies/${_id}`, {//Post Method
              title,cover
          })
         
      })
    }
};

export function fetchMovie(id){
    return dispatch=>{
        dispatch({
            type:'FETCH_MOVİE',
            payload: axios.get(`${API_PATH}/movies/${id}`)
            .then(result=>result.data)
        })



       
        
    }
}
