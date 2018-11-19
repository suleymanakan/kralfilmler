import {NEW_MOVİE_FULFILLED,
        NEW_MOVİE_REJECTED,
        NEW_MOVİE_PENDING,

        FETCH_MOVİE_FULFILLED,
        FETCH_MOVİE_REJECTED,
        FETCH_MOVİE_PENDING } from '../sa_actions/NewMovie';

const initialstate={
    fetching: false,
    done: false,
    movie: {
        fetching: false
    },
    error: {},
    

}
export default (state=initialstate, action)=>{
    switch(action.type){
        case NEW_MOVİE_PENDING:
        return{
            ...state,
            fetching: true
        }
        case NEW_MOVİE_FULFILLED:
        return {
            ...state,
            movies: action.payload,
            fetching: false,
            done: true
        }
        case NEW_MOVİE_REJECTED:
        return{
            ...state,
            error: action.payload,
            fetching:false
        }
        ///////////////////////////////////////
        case FETCH_MOVİE_PENDING:
        return{
            ...state,
            movie: {
                fetching:true
            }
        }
        case FETCH_MOVİE_FULFILLED:
        return {
            ...state,
            movie: {...action.payload.movie,
            fetching:false}
            
        }
        case FETCH_MOVİE_REJECTED:
        return{
            ...state,
            movie:{
                fetching:false
            }
            
        }
        default:
           return state;
    }
}