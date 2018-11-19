import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Route} from 'react-router-dom';
import MoviesPage from './sa_components/pages/MoviesPage';
import Footer from './sa_components/Footer';
import Header from './sa_components/Header';
import { Container } from 'semantic-ui-react';
import NewMoviePage from './sa_components/pages/NewMoviePage';



class App extends Component {
 
  render() {
    return (
      <div className="App">

      <Header />
      <Container text >
      <Route exact path='/movies' component={MoviesPage}></Route>
     
      <Route exact path='/movies/new' component={NewMoviePage}></Route>
      <Route axact path='/movie/:_id' component={NewMoviePage} ></Route>
      </Container>

        <Footer />
        
        
      </div>
    );
  }
}

export default App;
