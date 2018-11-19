import axios from 'axios';
import { API_PATH } from '../sa_config/Ifadeler';

export const NEW_MOVİE_PENDING = "NEW_MOVİE_PENDING";
export const NEW_MOVİE_FULFILLED = "NEW_MOVİE_FULFILLED";
export const NEW_MOVİE_REJECTED = "NEW_MOVİE_REJECTED";

export function postNewMovie({title, cover}){
   
   
    console.log(title+" "+cover)
    return dispatch => {
       dispatch({
          type: "NEW_MOVİE",
          payload: axios.post(`${API_PATH}/movies`, {//Post Method
              title,cover
          })
          .then(result=>Console.log(result)) 
      })
    }
};
