import { useState } from "react";
import { Link } from "react-router-dom";
import { ejercicio3 } from "../exercises/ejercicio3";

const initialState = {
    files: '',
};

function Ejercicio3() {

    const [value, setValue] = useState(initialState);
    const [data, setData] = useState(null)

    const onChange = (e) => {
        e.preventDefault();
        setValue({ ...value, [e.target.name]: e.target.value });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setData(ejercicio3(value));
        setValue(initialState);
    };


    return (
        <form onSubmit={onSubmit}>
            <span>Filas y Columnas</span>
            <input name='files' type='number' value={value.files} onChange={onChange} required />
            <button onClick={onSubmit} >Enviar</button>
            <div>----------Resultados----------</div>
            {
                data
                    ? data.map(files => {
                        return <div key={Math.random()}> {files.join(' || ')} </div>
                    })
                    : <div>Ingrese el valor para la Matriz Cuadrada</div>
            }
            <button><Link to='/'>Volver</Link></button>
        </form>
    )
}
export default Ejercicio3