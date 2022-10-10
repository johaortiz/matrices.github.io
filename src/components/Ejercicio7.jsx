import { useState } from "react";
import { Link } from "react-router-dom";
import { ejercicio7 } from "../exercises/ejercicio7";
import image from '../assets/diagramaEjercicio7.png';

const initialState = {
    branches: ''
};

function Ejercicio7() {

    const [data, setData] = useState(null);
    const [value, setValue] = useState(initialState);

    const onChange = (e) => {
        e.preventDefault();
        setValue({ ...value, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setData(ejercicio7(value));
        setValue(initialState);
    };

    return (
        <div>
            <form onSubmit={onSubmit} >
                <span>Cantidad de Sucursales</span>
                <input name='branches' type='number' value={value.branches} onChange={onChange} required />
                <button onClick={onSubmit} >Enviar</button>
                <div>----------Resultados----------</div>
                <p><strong>Sucursales por Meses</strong></p>
                {
                    data
                        ? data[0].map(files => {
                            return <div key={Math.random()}>{files.join('  ||  ')}</div>
                        })
                        : <div>Ingrese el valor Requerido</div>
                }
                {
                    data
                        ? <p><strong>Ventas totales de la Compañía: {data[1]}</strong></p>
                        : <div>Ingrese el valor Requerido</div>
                }
                {
                    data
                        ? <p><strong>La sucursal que más vendió fue la {data[2]} con {data[3]}</strong></p>
                        : <div>Ingrese el valor Requerido</div>
                }
                {
                    data
                        ? <p><strong>El mes que menos vendió fue el mes {data[4]} con {data[5]}</strong></p>
                        : <div>Ingrese el valor Requerido</div>
                }
                <button><Link to='/'>Volver</Link></button>
            </form>
            <img src={image} alt='Diagrama de Flujo' height={700} />
        </div>
    );
};
export default Ejercicio7;