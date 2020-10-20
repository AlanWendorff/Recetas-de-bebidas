import React, {useContext, useState} from 'react';
import { CategoriasContext } from '../context/CategoriasContext'
import { RecetasContext } from '../context/RecetasContext'

const Formulario = () => {

    const [busqueda, guardarBusqueda] = useState({
        nombre: '',
        categoria: ''
    });
    const [error, guardarError] = useState(false);
    

    const { categorias }    = useContext(CategoriasContext);
    const { buscarRecetas, guardarConsultar } = useContext(RecetasContext);
    
    //funcion para leer contenido de cada categoria
    const obtenerDatosReceta = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    const {nombre, categoria} = busqueda;

    const buscarRecetasDeTragos = e => {
        e.preventDefault();
        
        if(nombre.trim() === '' || categoria.trim() === ''){
            guardarError(true);
            return;
        }
        guardarError(false);
        guardarConsultar(true);
        //Aca enviamos los datos al Context
        buscarRecetas(busqueda);
    }

    return ( 
        <form className="col-12" onSubmit={buscarRecetasDeTragos}>
            <fieldset className="text-center">
                <legend>Busca bebidas por Categoria o ingrediente</legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        name="nombre"
                        className="form-control"
                        type="text"
                        placeholder="Buscar por Ingrediente"
                        onChange={obtenerDatosReceta}
                    />
                </div>
                <div className="col-md-4">
                    <select className="form-control" name="categoria" onChange={obtenerDatosReceta}>
                        <option value="">{"< Selecciona Categoria >"}</option>
                        {categorias.map(categoria => (
                            <option 
                                key={categoria.strCategory}
                                value={categoria.strCategory}
                            >{categoria.strCategory}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input 
                        type="submit" 
                        className="btn btn-block btn-primary"
                        value="Buscar Bebidas"
                        
                    />
                </div>
            </div>
        </form>
     );
}
 
export default Formulario;