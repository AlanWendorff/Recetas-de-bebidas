import React, { useContext, useState } from 'react';
import { ModalContext } from '../context/ModalContext'
import { mostrarIngredientes } from '../utilty/MostrarIngredientes';
import { getModalStyle, useStyles } from '../utilty/MaterialStyles';
import Modal from '@material-ui/core/Modal';

const Receta = ({receta}) => {

    
    const [ modalStyle ] = useState(getModalStyle);
    const [ open, setOpen ] = useState(false);

    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const {detalleReceta, guardarIdReceta, guardarDetalleReceta} = useContext(ModalContext);

    return ( 
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{receta.strDrink}</h2>
                <img className='card-img-top' src={receta.strDrinkThumb} alt={`Imagen de ${receta.strDrink}`}/>
                
                <div className="card-bopdy">
                    <button
                        type="button"
                        className="btn btn-block btn-primary"
                        onClick={() => {
                            guardarIdReceta(receta.idDrink);
                            handleOpen();
                        }}
                    >
                       Ver Receta 
                    </button>
                    <Modal 
                        open={open} 
                        onClose={() => {
                            guardarIdReceta(null);
                            guardarDetalleReceta({});
                            handleClose();
                        }}
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <h2>{detalleReceta.strDrink}</h2>
                            <h3 className="mt-4">Instrucciones</h3>
                            <p>
                                {detalleReceta.strInstructions}
                            </p>

                            <h3>Ingredientes y cantidades</h3>
                            <ul>
                                {mostrarIngredientes(detalleReceta)}
                            </ul>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>

     );
}
 
export default Receta;