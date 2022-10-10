import { useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/diagramaEjercicio2.png';
import { ejercicio2 } from '../exercises/ejercicio2';

const initialState = {
    files: '',
    columns: ''
};

function Ejercicio2() {

    const [values, setValue] = useState(initialState);
    const [data, setData] = useState(null)

    const onChange = (e) => {
        e.preventDefault();
        setValue({ ...values, [e.target.name]: e.target.value });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setData(ejercicio2(values));
        setValue(initialState);
    };

    return (
        <div>
            <form onSubmit={onSubmit} >
                <span>Filas</span>
                <input name='files' type='number' value={values.files} onChange={onChange} required />
                <span>Columnas</span>
                <input name='columns' type='number' value={values.columns} onChange={onChange} required />
                <button onClick={onSubmit} >Enviar</button>
                <div>----------Resultados----------</div>
                <p><strong>Matriz Normal</strong></p>
                {
                    data
                        ? data[0].map(files => {
                            return <div key={Math.random()} >{files.join(' || ')}</div>
                        })
                        : <div>Ingrese los Datos requeridos</div>
                }
                <p><strong>Matriz Transpuesta</strong></p>
                {
                    data
                        ? data[1].map(files => {
                            return <div key={Math.random()} >{files.join(' || ')}</div>
                        })
                        : <div>Ingrese los Datos requeridos</div>
                }
                <button><Link to='/'>Volver</Link></button>
            </form>
            <img src={image} alt='Diagrama de Flujo' height='400px' />
        </div>
    );
};

export default Ejercicio2;