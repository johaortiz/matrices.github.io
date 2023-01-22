import Box from "./Box";

const exercises = [
    {
        title: "Ejercicio N° 1",
        description: "Leer en una matriz N x M",
        subItems: ["Señalar si la matriz es cuadrada", "Promedio de los N x M números", "Promedio por Fila", "Promedio por Columna"],
        link: "/ej1"
    },
    {
        title: "Ejercicio N° 2",
        description: "Elaborar un diagrama de flujo que lea una matriz A de M filas y N columnas",
        subItems: ["Determinar su transpuesta"],
        link: "/ej2"
    },
    {
        title: "Ejercicio N° 3",
        description: "Generar una Matriz unitaria de orden N",
        subItems: [],
        link: "/ej3"
    },
    {
        title: "Ejercicio N° 4",
        description: "Leer una matriz A de orden M x N",
        subItems: ["Multiplicar todos los elementos de la matriz por el número k"],
        link: "/ej4"
    },
    {
        title: "Ejercicio N° 5",
        description: "Leer dos matrices A y B de orden M x N",
        subItems: ["Calcular la A x B"],
        link: "/ej5"
    },
    {
        title: "Ejercicio N° 6",
        description: "Leer dos Vectores A y B de orden N",
        subItems: ["Calcular la A x B"],
        link: "/ej6"
    },
    {
        title: "Ejercicio N° 7",
        description: "Una compañía tiene N sucursales en todo el país. Se formó una matriz de N por 12 que contiene las ventas de cada sucursal durante 12 meses del año. Calcular",
        subItems: ["Total, de ventas de la compañía", "Total de ventas de cada sucursal", "Sucursal que más vendió durante el año", "Mes que menos vendió la compañía"],
        link: "/ej7"
    },
    {
        title: "Ejercicio N° 8",
        description: "En una matriz C de M x 6 se almacenan las calificaciones de 6 materias de un grupo de M estudiantes. Calcular",
        subItems: ["La nota promedio de cada estudiante", "El número de estudiantes que aprobaron cada materia", "El número de estudiantes que reprobaron cada materia", "La nota promedio de cada materia"],
        link: "/ej8"
    }
]

function Home() {
    return (
        <>
            <div>
                <h1 className="my-4 text-3xl font-bold text-center">Trabajo Práctico Intecátedra Discretas y Programación Estructurada</h1>
                <h2 className="my-4 text-xl font-bold text-center">Seleccione un ejercicio</h2>
            </div>
            <div className="gridOfCards heightMax">
                {
                    exercises.map((exercise, index) => {
                        return <Box key={index} title={exercise.title} description={exercise.description} subItems={exercise.subItems} link={exercise.link} />
                    })
                }
            </div >
        </>
    );
};
export default Home;