import React from 'react';
import '../App.css';
import { Button, Image,  Form } from 'semantic-ui-react'
import InlineError from './InlineError';


const options=[
    {key:"b", text:"Bilim Kurgu", value:"bilim-kurgu"},
    {key:"m", text:"Macera", value:"macera"},
    {key:"k", text:"Komedi", value:"komedi"},
]
class MovieAddForm extends React.Component{
    state={
        movieName: '',
        movieImageUrl: '',
        errors: {}
        
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
       console.log(this.state)
   };
   validations=()=>{
       const errors={};
       if(!this.state.movieName) errors.movieName="Lütfen Boş Bırakmayınız";
       if(!this.state.movieImageUrl) errors.movieImageUrl="Lütfen Boş Bırakmayınız";
       return errors;
   }

    render(){
        const errors = this.state.errors
        return(
            <div >

                <Form onSubmit={this.onSubmit} >
                    <Form.Field>
                    <label>Film İsmi</label>
                    {errors.movieName && <InlineError message={errors.movieName}  />}
                    <input
                     id="movieName"
                     name="movieName"
                     value={this.state.movieName}
                     onChange={this.handleChange}
                    placeholder='Film İsmi' />
                    </Form.Field>
                    <Form.Field>
                    <label>Film Turu</label>
                    <Form.Select className="formSelect" options={options} placeholder='Film Turu'  />
                    </Form.Field>
                    <Form.Field>
                    <label>Film Resim Url</label>
                    {errors.movieImageUrl && <InlineError message={errors.movieImageUrl} />}
                    <input
                    id="movieImageUrl"
                    name="movieImageUrl"
                    value={this.state.movieImageUrl}
                    onChange={this.handleChange}
                    placeholder='Film Resim Url'  />
                    </Form.Field>
                    <Image src={this.state.movieImageUrl} size='small' />
                    <div className="clearfix"></div>
                    <Button type='submit'>Kaydet</Button>
                </Form>

            </div>
        )
    }
}
export default MovieAddForm;