import React from 'react';
import TiposAuto from './TiposAuto';



class Autos extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const tiposAuto = ['Autos de ciudad', 'Vagonetas', 'Camionetas'];
        const consecionarias = ['Hansa', 'Imcruz', 'Toyosa', 'Ovando', 'etc..']
        return <div>
                <h1>Autos</h1>
                <TiposAuto autos={tiposAuto} concesionarias={consecionarias}/>                
            </div>
    }
}

export default Autos;