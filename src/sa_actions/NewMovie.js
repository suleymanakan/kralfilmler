import axios from 'axios';
import { API_PATH } from '../sa_config/Ifadeler';

export const NEW_MOVİE_PENDING = "NEW_MOVİE_PENDING";
export const NEW_MOVİE_FULFILLED = "NEW_MOVİE_FULFILLED";
export const NEW_MOVİE_REJECTED = "NEW_MOVİE_REJECTED";

export function saNewMovie(){
    return dispatch => {

        
       dispatch({
          type: "NEW_MOVİE",
          payload: ""//Post Method
      })
    }
};
