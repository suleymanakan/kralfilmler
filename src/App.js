import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Route} from 'react-router-dom';
import MoviesPage from './sa_components/pages/MoviesPage';
import NewMoviePAge from './sa_components/pages/NewMoviePage';
import Footer from './sa_components/Footer';
import Header from './sa_components/Header';
import { Container } from 'semantic-ui-react';



class App extends Component {
 
  render() {
    return (
      <div className="App">

        <Header />
      <Container text >
      <Route exact path='/movies' component={MoviesPage}></Route>
      {/* normalde aşağıdaki path e movies/NewMoviePage  verilir path lerin onune de birer  exact yazılır.
       ve header sayfasındaki yonlendirmede  exact ın true değeri kaldırılır*/ }
      <Route exact path='/movies/NewMoviePage' component={NewMoviePAge}></Route>
      </Container>

        <Footer />
        
        
      </div>
    );
  }
}

export default App;
