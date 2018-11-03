import {FETCHED_MOVIES, FETCHED_MOVIES_ERROR} from '../sa_actions/Movies';

const initialstate={
    fetching:false,
    fetched: false,
    error: {},
    movies: []

}
export default (state=initialstate, action)=>{
    switch(action.type){
        case FETCHED_MOVIES:
        return {
            ...state,
            movies: action.payload
        }
        case FETCHED_MOVIES_ERROR:
        return{
            ...state,
            error: action.payload
        }
        default:
           return state;
    }
}