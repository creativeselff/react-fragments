import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';


const Computacion = () => (
  <React.Fragment>
    <li>Monitor</li>
    <li>Teclado</li>
    <li>Mouse</li>
    </React.Fragment>    
)

const Ropa = () => (
  <React.Fragment>
    <li>Remera</li>
    <li>Short</li>
    <li>Jean</li>
  </React.Fragment>
)



class App extends React.Component {
  render () {
    return (
      <div>
      <Computacion />
      <Ropa />
      </div>
    )
  }
}


render(<App />, document.getElementById('root'));