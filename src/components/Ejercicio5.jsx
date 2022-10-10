import { useState } from "react";
import { ejercicio5 } from "../exercises/ejercicio5";
import image from '../assets/diagramaEjercicio5.png';
import { Link } from "react-router-dom";


const initialState = {
    files: '',
    columns: '',
    files1: '',
    columns1: ''
};

function Ejercicio5() {

    const [values, setValues] = useState(initialState);
    const [data, setData] = useState(null);

    const onChange = (e) => {
        e.preventDefault();
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setData(ejercicio5(values));
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <span>Filas Primera Matriz</span>
                <input name='files' type='number' value={values.files} onChange={onChange} required />
                <span>Columnas Primera Matriz</span>
                <input name='columns' type='number' value={values.columns} onChange={onChange} required />
                <span>Filas Segunda Matriz</span>
                <input name='columns' type='number' value={values.columns} onChange={onChange} required />
                <span>Columnas Segunda Matriz</span>
                <input name='columns1' type='number' value={values.columns1} onChange={onChange} required />
                <button onClick={onSubmit} >Enviar</button>
                <div>----------Resultados----------</div>
                <p><strong>Primera Matriz</strong></p>
                {
                    data
                        ? data[0].map(files => {
                            return <div key={Math.random()}> {files.join(' || ')} </div>
                        })
                        : <div>Ingrese las filas y columnas</div>
                }
                <p><strong>Segunda Matriz</strong></p>
                {
                    data
                        ? data[1].map(files => {
                            return <div key={Math.random()}> {files.join(' || ')} </div>
                        })
                        : <div>Ingrese las filas y columnas</div>
                }
                <p><strong>Tercera Matriz</strong></p>
                {
                    data
                        ? data[2].map(files => {
                            return <div key={Math.random()}> {files.join(' || ')} </div>
                        })
                        : <div>Ingrese las filas y columnas</div>
                }
                <button><Link to='/'>Volver</Link></button>
            </form>
            <img src={image} alt='Diagrama de Flujo' height={500} />
        </div>
    );
};
export default Ejercicio5;