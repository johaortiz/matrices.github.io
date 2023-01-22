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

    const deleteAll = () => {
        setDatas(null);
    }



    //Se que no se hace así pero ultima hora...
    return (
        <div className="container mx-auto">
            <form className="gridOfCards" onSubmit={onSubmit}>
                <label className="input-group w-auto m-5">
                    <span>Filas</span>
                    <input className="input input-bordered input-primary w-40" name='files' type='number' value={values.files} onChange={onChange} required />
                </label>
                <label className="input-group w-auto m-5">
                    <span>Columnas</span>
                    <input className="input input-bordered input-primary w-40" name='columns' type='number' value={values.columns} onChange={onChange} required />
                </label>
                <button className="btn btn-primary m-5 w-auto" onClick={onSubmit}>Calcular</button>
            </form>
            <div className="mt-10">
                {
                    data
                        ? data[0].map(files => {
                            return <h4 className="text-center text-2xl my-2" key={Math.random()}>{files.join(' || ')}</h4>
                        })
                        : <h2 className="text-4xl text-center my-2">Ingrese las filas y columnas</h2>
                }
                {
                    data
                        ? data[1]
                            ? <div className="my-6">
                                <p className="text-xl my-2"><strong>Es Matriz Cuadrada</strong></p>
                                <p className="text-xl my-2"><strong>El promedio General es: {data[2]}</strong></p>
                                <p className="text-xl my-2"><strong>El promedio por Filas es: {data[3].join('  ||  ')}</strong></p>
                                <p className="text-xl my-2"><strong>El promedio Columnas es: {data[4].join('  ||  ')}</strong></p>
                            </div>
                            : <div className="my-6">
                                <p className="text-xl my-2"><strong>No es Matriz Cuadrada</strong></p>
                                <p className="text-xl my-2"><strong>El promedio General es: {data[2]}</strong></p>
                                <p className="text-xl my-2"><strong>El promedio por Filas es: {data[3].join('  ||  ')}</strong></p>
                                <p className="text-xl my-2"><strong>El promedio Columnas es: {data[4].join('  ||  ')}</strong></p>
                            </div>
                        : <></>
                }
            </div>
            <div className="flex flex-col mt-20">
                <a><button className="btn btn-primary my-2" onClick={deleteAll}>Borrar Todo</button></a>
                <Link to='/'><button className="btn btn-primary my-2">Volver</button></Link>
            </div>
        </div>
    );
};





export default Ejercicio1;