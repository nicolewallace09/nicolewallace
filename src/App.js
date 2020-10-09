import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
// import Contact from './Components/Contact';
// import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';

class App extends Component {

  render() {
    return (
      <>
      <div className="App">
        <Header></Header>
        <About></About>
        <Resume></Resume>
        <Portfolio></Portfolio>
        <Footer></Footer>
      </div>
      </>
    );
  }
}

export default App;
