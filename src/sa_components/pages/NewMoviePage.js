import React from 'react';
import {connect} from 'react-redux';
import MovieAddForm from '../MovieAddForm';
import {postNewMovie, fetchMovie } from '../../sa_actions/NewMovie';
import { Item } from 'semantic-ui-react';

class NewMoviePage extends React.Component{
 componentDidMount(){
     const {match}=this.props;
     if(!this.props.movie && match.params._id){
         this.props.fetchMovie(match.params._id);
     }
 }
    render(){
        return(
            <div>
                Yeni filim ekleme sayfasıdır....
                <MovieAddForm 
                movie={this.props.movie}
                newMovie={this.props.newMovie}
                postNewMovie={this.props.postNewMovie} />

            </div>
        )
    }
}
const mapStateToProps = ({newMovie, movies},props) =>{
    return{
        newMovie,
        //movielisteki id leri tara props üzerinden gelen id ile eşleşen filmin verilerini getir
        movie: movies.movieList.find(item => item._id === props.match.params._id )
    }
}
const mapDispatchToProps = {
        postNewMovie,
        fetchMovie
}
export default connect(mapStateToProps, mapDispatchToProps )(NewMoviePage);