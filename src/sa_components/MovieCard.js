import React from 'react'
import { Card, Icon, Grid } from 'semantic-ui-react'


/*const extra = (
  <a>
    <Icon name='user' />
    16 Friends
  </a>
)*/

const MovieCard = ({movie}) => (
  <Grid.Column   >
  <Card
    image={movie.cover}
    header= {movie.title}
    description='sakan'
   // extra={extra}
  />
</Grid.Column>
)

export default MovieCard