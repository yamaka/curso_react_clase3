import React from 'react';
import logo from './logo.svg';
import './App.css';

class MiComponenteHijo2 extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return  <div>componente hijo 2</div>
  }

}

const MiComponenteHijo = () =>{
  return <div>componente hijo</div>
}

function MiComponentePadre() {
  return (
    <div>
      mi primer componente padre
      <MiComponenteHijo/>
      <MiComponenteHijo2/>
    </div>
  );
}

export default MiComponentePadre;
