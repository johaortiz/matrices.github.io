import { Link } from "react-router-dom";

function Home() {


    return (
        <div>
            <div>
                <h1>Trabajo Práctico Intecátedra Discretas y Programación Estructurada</h1>
                <h2>Seleccione un ejercicio</h2>
            </div>
            <div>
                <button><Link to='/ej1'>Ejercicio N°1</Link></button>
                <button><Link to='/ej2'>Ejercicio N°2</Link></button>
                <button><Link to='/ej3'>Ejercicio N°3</Link></button>
                <button><Link to='/ej4'>Ejercicio N°4</Link></button>
                <button><Link to='/ej5'>Ejercicio N°5</Link></button>
                <button><Link to='/ej6'>Ejercicio N°6</Link></button>
                <button><Link to='/ej7'>Ejercicio N°7</Link></button>
                <button><Link to='/ej8'>Ejercicio N°8</Link></button>
            </div>
        </div>
    );
};
export default Home;