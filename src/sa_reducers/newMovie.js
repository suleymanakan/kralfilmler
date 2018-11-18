import {NEW_MOVİE_FULFILLED, NEW_MOVİE_REJECTED, NEW_MOVİE_PENDING} from '../sa_actions/NewMovie';

const initialstate={
    fetching:false,
    movies: [],
    error: {}

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
            fetching:false
        }
        case NEW_MOVİE_REJECTED:
        return{
            ...state,
            error: action.payload,
            fetching:false
        }
        default:
           return state;
    }
}