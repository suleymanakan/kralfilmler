import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import {Link, Route} from 'react-router-dom';
import MoviesPage from './sa_components/pages/MoviesPage';
import Footer from './sa_components/Footer';
import Header from './sa_components/Header';



class App extends Component {
 
  render() {
    return (
      <div className="App">

        <Header />
      
        <Route path='/movies' component={MoviesPage}></Route>

        <Footer />
        
        
      </div>
    );
  }
}

export default App;
