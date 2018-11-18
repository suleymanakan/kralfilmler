import React from 'react';
import {connect} from 'react-redux';
import MovieAddForm from '../MovieAddForm';
import {saNewMovie} from '../../sa_actions/NewMovie';

class NewMoviePage extends React.Component{
  constructor(props){
      super(props)
      console.log(props)
  }
    render(){
        return(
            <div>
                Yeni filim ekleme sayfasıdır....
                <MovieAddForm />

            </div>
        )
    }
}
const mapStateToProps =({newMovie})=>{
    return{
        newMovie
    }
}
const mapDispatchToProps=(saNewMovie)=>{
    return {
        saNewMovie

    }
}
export default connect(mapStateToProps, mapDispatchToProps )(NewMoviePage);