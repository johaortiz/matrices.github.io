import { useState } from "react";
import { Link } from "react-router-dom";
import { ejercicio6 } from "../exercises/ejercicio6";
import image from '../assets/diagramaEjercicio6.png';

const initialState = {
    files: ''
}


function Ejercicio6() {

    const [value, setValue] = useState(initialState);
    const [data, setData] = useState(null);

    const onChange = (e) => {
        e.preventDefault();
        setValue({ ...value, [e.target.name]: e.target.value });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setData(ejercicio6(value));
        setValue(initialState);
    };

    console.log(data)

    return (
        <div>
            <form onSubmit={onSubmit} >
                <span>Dimesión de los vectores</span>
                <input name='files' type='number' value={value.files} onChange={onChange} required />
                <div>----------Resultados----------</div>
                <p><strong>Vector 1</strong></p>
                {
                    data
                        ?
                        <div key={Math.random()}>{data[0].join('  ||  ')}</div>
                        : <div>Ingrese el valor Requerido</div>
                }
                <p><strong>Vector 2</strong></p>
                {
                    data
                        ?
                        <div key={Math.random()}>{data[1].join('  ||  ')}</div>
                        : <div>Ingrese el valor Requerido</div>
                }
                <p><strong>Producto de Vectores</strong></p>
                {
                    data
                        ?
                        <div key={Math.random()}>{data[2]}</div>
                        : <div>Ingrese el valor Requerido</div>
                }

                <button><Link to='/'>Volver</Link></button>
            </form>
            <img src={image} alt='Diagrama de Flujo' height={500} />
        </div>
    );
};
export default Ejercicio6;