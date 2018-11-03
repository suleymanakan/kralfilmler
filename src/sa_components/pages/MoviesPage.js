import React from 'react';
 import PropTypes from 'prop-types';
 import {connect} from 'react-redux';
 import MoviesList from '../MoviesList';
import {fetchMovies} from '../../sa_actions/Movies';
class MoviesPage extends React.Component{
    static propTypes={
        movies:PropTypes.object.isRequired
    };
    componentDidMount(){
        this.props.fetchMovies();

    }
    render(){
       
        return(
            <div>
                <h2>Bu sayfa MoviesPage dir</h2>
                <MoviesList movies={this.props.movies}></MoviesList>
            </div>
        )
    }
}
const mapStateToPops = ({movies})=>{
    return{
        movies
    } 
};
const mapDispatchToProps={
    fetchMovies
};
export default connect(mapStateToPops,mapDispatchToProps)(MoviesPage);