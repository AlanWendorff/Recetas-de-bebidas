import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios'

// creacion del context
export const CategoriasContext = createContext();

// provider donde se encuentran las funciones y state's
const CategoriasProvider = (props) => {

    const [categorias, guardarCategorias] = useState([]);

    useEffect(() => {
        const obtenerCategorias = async () => {
            const categoriasURL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
            const categoriasList = await axios.get(categoriasURL);
            guardarCategorias(categoriasList.data.drinks);
        }
        obtenerCategorias();
    }, []);//Hacemos que ejecute una sola vez

    return(
        <CategoriasContext.Provider 
            value={{categorias}}
        >
            {props.children}
        </CategoriasContext.Provider>
    );
}

export default CategoriasProvider