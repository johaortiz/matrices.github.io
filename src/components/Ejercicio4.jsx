import { useState } from "react";
import { Link } from "react-router-dom";
import { ejercicio4 } from "../exercises/ejercicio4";

const initialState = {
    files: '',
    columns: '',
    k: ''
};


function Ejercicio4() {


    const [values, setValues] = useState(initialState);
    const [data, setData] = useState(null)

    const onChange = (e) => {
        e.preventDefault();
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setData(ejercicio4(values));
        setValues(initialState);
    };


    return (
        <form onSubmit={onSubmit} >
            <span>Filas</span>
            <input name='files' type='number' value={values.files} onChange={onChange} required />
            <span>Columnas</span>
            <input name='columns' type='number' value={values.columns} onChange={onChange} required />
            <span>Número k</span>
            <input name='k' type='number' value={values.k} onChange={onChange} required />
            <button onClick={onSubmit} >Enviar</button>
            <div>----------Resultados----------</div>
            <p><strong>Matriz Sin Multiplicar</strong></p>
            {
                data
                    ? data[0].map(files => {
                        return <div key={Math.random()} >{files.join(' || ')}</div>
                    })
                    : <div>Ingrese los Datos requeridos</div>
            }
            <p><strong>Matriz Multiplicada</strong></p>
             {
                data
                    ? data[1].map(files => {
                        return <div key={Math.random()} >{files.join(' || ')}</div>
                    })
                    : <div>Ingrese los Datos requeridos</div>
            }
            <button><Link to='/'>Volver</Link></button>
        </form>
    );
};


export default Ejercicio4;