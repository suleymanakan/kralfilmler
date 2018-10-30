import React from 'react';
 import PropTypes from 'prop-types';
 import {connect} from 'react-redux';
 import MoviesList from '../MoviesList';

class MoviesPage extends React.Component{
    static propTypes={
        movies:PropTypes.array.isRequired
    };
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
  
}
export default connect(mapStateToPops)(MoviesPage);