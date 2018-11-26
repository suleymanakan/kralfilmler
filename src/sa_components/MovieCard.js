import React from 'react'
import '../App.css';
import {Link} from 'react-router-dom';
import { Card, Grid,Icon, Button } from 'semantic-ui-react'


const extra =(movie, onDeleteMovie)=> {
  return(
  <div className="ui-ikili-button"  >
    <Button animated as={Link} to={`/movie/${movie._id}`} >
      <Button.Content  visible>Edit</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>
    <Button animated='vertical' onClick={()=> onDeleteMovie(movie._id)} >
      <Button.Content  hidden>Delete</Button.Content>
      <Button.Content visible>
        <Icon name='trash' />
      </Button.Content>
    </Button>
  </div>
)}

const MovieCard = ({movie, onDeleteMovie}) => (
  <Grid.Column   >
  <Card
    image={movie.cover}
    header= {movie.title}
    description='sakan'
    extra={extra(movie, onDeleteMovie)}
  />
</Grid.Column>
)

export default MovieCard