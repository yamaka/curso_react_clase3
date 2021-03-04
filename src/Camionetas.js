import React from 'react';

const camionetas = [
    'Toyota Hilux',
    'Nissan Frontier'
]


const numeros = [1,2,3];

const pares = numeros.map(e=> e*2);



function Camionetas (){
    return <div>
            <ul>                
               {camionetas.map(item => <li>{item}</li> )}
               <li>Hilux</li>
               <li>Frontier</li>
            </ul>
            {/*<h2>pares</h2>
            <ul>
                {pares.map(p=><li>{p}</li>)}
            </ul>*/}
        </div>
}

export default Camionetas;