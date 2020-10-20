import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios'


// creacion del context
export const ModalContext = createContext();

const ModalProvider = (props) => {

    const [ idreceta, guardarIdReceta] = useState(null);
    const [ detalleReceta, guardarDetalleReceta] = useState({});

    useEffect(() => {
        if(!idreceta) return;
        
        const callAPI = async () => {            
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;
            const detalleReceta = await axios.get(url);
            guardarDetalleReceta(detalleReceta.data.drinks[0]);
        }
        callAPI();
    }, [idreceta]);

    

    return(
        <ModalContext.Provider 
            value={{
                detalleReceta,
                guardarIdReceta,
                guardarDetalleReceta
            }}
        >
            {props.children}
        </ModalContext.Provider>
    );
}
 
export default ModalProvider;