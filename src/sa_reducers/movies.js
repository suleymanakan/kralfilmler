import {FETCH_MOVIES_FULFILLED, FETCH_MOVIES_REJECTED, FETCH_MOVIES_PENDING} from '../sa_actions/Movies';

const initialstate={
    fetching:false,
    movieList: [],
    error: {}

}
export default (state=initialstate, action)=>{
    switch(action.type){
        case FETCH_MOVIES_PENDING:
        return{
            ...state,
            fetching: true
        }
        case FETCH_MOVIES_FULFILLED:
        return {
            ...state,
            movieList: action.payload,
            fetching:false
        }
        case FETCH_MOVIES_REJECTED:
        return{
            ...state,
            error: action.payload,
            fetching:false
        }
        default:
           return state;
    }
}