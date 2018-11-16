import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {
    Container, Grid,Header,Image,List, Segment,
  } from 'semantic-ui-react'
 const Footer=()=> {
    return(
        <div>
         <Segment inverted style={{ margin: '5em 0em 0em', padding: '1em 0em' }} vertical>
           <Container textAlign='center'>
            <Grid columns={3} >
              <Grid.Row>
                <Grid.Column>
                  <Header inverted as='h4' content='Yabancı Diziler' />
                  <List link inverted>
                    <List.Item as='a'>Breeking Bad</List.Item>
                    <List.Item as='a'>Fretch</List.Item>
                    
                  </List>
                </Grid.Column>
                <Grid.Column>
                  <Header inverted as='h4' content='Yerli Diziler' />
                  <List link inverted>
                    <List.Item as='a'>Kurtlar Vadisi Pusu</List.Item>
                    <List.Item as='a'>Acı Hayat</List.Item>
                   
                  </List>
                </Grid.Column>
                <Grid.Column>
                  <Header inverted as='h4' content='Hint Filmleri' />
                  <List link inverted>
                    <List.Item as='a'>Dangal</List.Item>
                    <List.Item as='a'>Sakan</List.Item>
                    
                  </List>
                </Grid.Column>
                <Grid.Column>
                  <Header inverted as='h4' content='Başlık' />
                  <p>
                   Ek Alan
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <hr></hr>
            <Image src='https://react.semantic-ui.com/logo.png' centered size='mini' />
            <List horizontal inverted divided link size='small'>
              <List.Item as='a' href='#'>
                Site Map
              </List.Item>
              <List.Item as='a' href='#'>
                İletisim
              </List.Item>
              <List.Item as='a' href='#'>
                Şartlar ve koşullar
              </List.Item>
              <List.Item as='a' href='#'>
                Gizlilik Politikası
              </List.Item>
            </List>
          </Container>
        </Segment>
        </div>
    )

}

export default Footer;
