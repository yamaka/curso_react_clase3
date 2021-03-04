import React from 'react';

import AutosCiudad from './AutosCiudad';
import Vagonetas from './Vagonetas';
import Camionetas from './Camionetas';

function TiposAuto (props){
    const {autos}= props;
    return <div>
            <h2>Tipos de Autos</h2>
            <ul>
                {autos.map( (auto, index) => {
                        let jsx; 
                        if(index == 0){
                            jsx = <li>{auto}<AutosCiudad/></li>
                        }
                        if(index == 1){
                            jsx = <li>{auto} <Vagonetas/></li>
                        }
                        if(index == 2){
                            jsx = <li>{auto} <Camionetas/></li>
                        }
                        return jsx;
                    }
                )
                }
            </ul>
        </div>
}

export default TiposAuto;