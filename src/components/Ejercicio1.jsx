import { useState } from "react";
import { Link } from "react-router-dom";
import { ejercicio1 } from "../exercises/ejercicio1";

const initialState = {
    files: '',
    columns: ''
};


function Ejercicio1() {
    const [values, setValues] = useState(initialState);
    const [data, setDatas] = useState(null);

    const onChange = (e) => {
        e.preventDefault();
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setDatas(ejercicio1(values));
        setValues(initialState);
    };



    //Se que no se hace así pero ultima hora...
    return (
        <form onSubmit={onSubmit} >
            <span>Filas</span>
            <input name='files' type='number' value={values.files} onChange={onChange} required />
            <span>Columnas</span>
            <input name='columns' type='number' value={values.columns} onChange={onChange} required />
            <button onClick={onSubmit} >Enviar</button>
            <div>----------Resultados----------</div>
            {
                data
                    ? data[0].map(files => {
                        return <div key={Math.random()}> {files.join(' || ')} </div>
                    })
                    : <div>Ingrese las filas y columnas</div>
            }
            {
                data
                    ? data[1]
                        ? <>
                            <p><strong>Matriz Cuadrada</strong></p>
                            <p><strong>El promedio General es: {data[2]}</strong></p>
                            <p><strong>El promedio por Filas es: {data[3].join('  ||  ')}</strong></p>
                            <p><strong>El promedio Columnas es: {data[4].join('  ||  ')}</strong></p>
                        </>
                        : <>
                            <p><strong>Matriz no Cuadrada</strong></p>
                            <p><strong>El promedio General es: {data[2]}</strong></p>
                            <p><strong>El promedio por Filas es: {data[3].join('  ||  ')}</strong></p>
                            <p><strong>El promedio Columnas es: {data[4].join('  ||  ')}</strong></p>
                        </>
                    : <></>
            }
            <button><Link to='/'>Volver</Link></button>
        </form>
    );
};





export default Ejercicio1;