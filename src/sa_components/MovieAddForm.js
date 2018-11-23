import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import { Button, Image,  Form } from 'semantic-ui-react'
import InlineError from './InlineError';


const options=[
    {key:"b", text:"Bilim Kurgu", value:"bilim-kurgu"},
    {key:"m", text:"Macera", value:"macera"},
    {key:"k", text:"Komedi", value:"komedi"},
]
class MovieAddForm extends React.Component{
    state={
        _id: this.props.movie ? this.props.movie._id : '',
        title: this.props.movie ? this.props.movie.title : '',
        cover: this.props.movie ? this.props.movie.cover : '',
        movie_genre: '',
        errors: {}   
    };

    
    static propTypes={
        postNewMovie:PropTypes.func.isRequired
    };

   handleChange=(e)=>{
    this.setState({
       [e.target.name]: e.target.value
    });
   };

   onSubmit=()=>{
       const errors= this.validations();
       this.setState({
           errors
       });
       const _id=this.state._id|| this.props.newMovie.movie._id;

       if(Object.keys(errors).length === 0){
          // this.props.postNewMovie(this.state)
           if(!_id)
           this.props.onNewMovieSumbit(this.state)
           else
           this.props.onUpdateMovieSumbit({...this.state, _id})

       }
   };
   validations=()=>{
       const errors={};
       if(!this.state.title) errors.title="Lütfen Boş Bırakmayınız";
       if(!this.state.cover) errors.cover="Lütfen Boş Bırakmayınız";
       //if(!this.state.movieGenre) errors.movieGenre="Lütfen Boş Bırakmayınız";
       return errors;
   }
   componentWillReceiveProps(nextProps){
       const { movie } = nextProps.newMovie;
       if(movie.title && ! movie.title !== this.state.title ){
           this.setState({
               title: movie.title,
               cover: movie.cover
           })
       }
   }

    render(){
        const {errors} = this.state
        const form=(
         <Form onSubmit={this.onSubmit} loading={this.props.newMovie.fetching || this.props.newMovie.movie.fetching}>
                    <Form.Field >
                    <label>Film İsmi</label>
                    {errors.title && <InlineError message={errors.title}  />}
                    <input id="title" name="title" placeholder='Film İsmi'
                     value={this.state.title}
                     onChange={this.handleChange} />
                    </Form.Field>
                    <Form.Field>
                    <label>Film Turu</label>
                    {errors.movie_genre && <InlineError message={errors.movie_genre}  />}
                    <Form.Select className="formSelect" options={options} placeholder='Film Turu'  />
                    </Form.Field>
                    <Form.Field>
                    <label>Film Resim Url</label>
                    {errors.cover && <InlineError message={errors.cover} />}
                    <input id="cover" name="cover" placeholder='Film Resim Url'
                    value={this.state.cover}
                    onChange={this.handleChange} />
                    </Form.Field>
                    <Image src={this.state.cover} size='small' />
                    <div className="clearfix"></div>
                    <Button type='submit'>Kaydet</Button>
                    {
                        this.props.newMovie.error.request && 
                        <div className="addFromError">
                        <h3>Kayıt yapılamadı. Bir hata oluştu</h3></div>
                    }
                </Form>
        );
        return(
            <div >
                {this.props.newMovie.done ? <Redirect to="/movies" /> : form }
            </div>
        )
    }
}
export default MovieAddForm;