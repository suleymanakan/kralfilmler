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
   
    render(){
        
        return(
            <div >

                <Form  >
                    <Form.Field>
                    <label>Film İsmi</label>
                    
                    <input
                    placeholder='Film İsmi' />
                    </Form.Field>
                    <Form.Field>
                    <label>Film Turu</label>
                    <Form.Select className="formSelect" options={options} placeholder='Film Turu'  />
                    </Form.Field>
                    <Form.Field>
                    <label>Film Resim Url</label>
                    
                    <input
                
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