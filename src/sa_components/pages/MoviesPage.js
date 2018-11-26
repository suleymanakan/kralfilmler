import React from 'react';
 import PropTypes from 'prop-types';
 import {connect} from 'react-redux';
 import MoviesList from '../MoviesList';
import {fetchMovies, onDeleteMovie} from '../../sa_actions/Movies';


class MoviesPage extends React.Component{
    static propTypes={
        movies: PropTypes.object.isRequired,
        onDeleteMovie: PropTypes.func.isRequired
    };
    componentDidMount(){
        this.props.fetchMovies();
    }
    render(){
        return(
            <div>
                <h2>MoviesPage Sayfasıdır</h2>
                <MoviesList 
                movies={this.props.movies}
                onDeleteMovie={this.props.onDeleteMovie}></MoviesList>
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
    fetchMovies,
    onDeleteMovie
};
export default connect(mapStateToPops,mapDispatchToProps)(MoviesPage);