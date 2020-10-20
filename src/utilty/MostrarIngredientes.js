import React from 'react';

export const mostrarIngredientes = (detalleReceta) => {

    let ingredientes = [];
    for(let i=1; i< 16; i++){

        if(detalleReceta[`strIngredient${i}`]){
            ingredientes.push(
                <li>{detalleReceta[`strIngredient${i}`]} - {detalleReceta[`strMeasure${i}`]}</li>
            );
        }
    }

    return (ingredientes);
}
