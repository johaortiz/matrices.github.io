import { useState } from "react";
import { Link } from "react-router-dom";
import { ejercicio8 } from "../exercises/ejercicio8";
import image from '../assets/diagramaEjercicio8.png';


const initialState = {
    studends: ''
};

function Ejercicio8() {

    const [value, setValue] = useState(initialState);
    const [data, setData] = useState(null);

    const onChange = (e) => {
        e.preventDefault();
        setValue({ ...value, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setData(ejercicio8(value));
        setValue(initialState);
    };

    console.log(data)

    return (
        <div>
            <form onSubmit={onSubmit} >
                <span>Cantidad de Estudiantes</span>
                <input name='studends' type='number' value={value.studends} onChange={onChange} required />
                <div>----------Resultados----------</div>
                <p><strong>Matriz de Estudiantes por Materias</strong></p>
                {
                    data
                        ? data[0].map((files, i) => {
                            return <div key={i} >Estudiante {i + 1}: || {files.join(' || ')} ||</div>
                        })
                        : <div>Ingrese los Datos requeridos</div>
                }
                <p><strong>Promedio Total de Estudiantes</strong></p>
                {
                    data
                        ? data[1].map((student, i) => {
                            return <div key={i}>Estudiante {i + 1}: || {student} ||</div>
                        })
                        : <div>Ingrese los Datos requeridos</div>
                }
                <p><strong>Aprobados y Desaprobados por Materia</strong></p>
                {
                    data
                        ? data[2].map((matter, i) => {
                            return <div key={i}>Materia {i + 1}: || {matter.join(' || ')} ||</div>
                        })
                        : <div>Ingrese los Datos requeridos</div>
                }
                <p><strong>Promedio por Materia</strong></p>
                {
                    data
                        ? data[3].map((matter, i) => {
                            return <div key={i}>Materia {i + 1}: || {matter} ||</div>
                        })
                        : <div>Ingrese los Datos requeridos</div>
                }
                <button><Link to='/'>Volver</Link></button>
            </form>
            <img src={image} alt='Diagrama de Flujo' height={700} />
        </div>
    );
};
export default Ejercicio8;