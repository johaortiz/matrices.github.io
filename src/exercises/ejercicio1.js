export const ejercicio1 = ({ files, columns }) => {

    //Es cuadrada? true || false
    const square = files === columns;
    //variables (filas y columnas se recibe por props)
    const matriz = [];
    let sum = 0;
    let count = 0;
    let promForFiles = [];
    let promForColumns = [];
    //Armado de Matriz
    for (let i = 0; i < files; i++) {
        matriz[i] = [];
    };

    for (let i = 0; i < files; i++) {
        let file = 0;
        let countFile = 0;
        for (let j = 0; j < columns; j++) {
            //Matriz General
            matriz[i][j] = Math.floor(Math.random() * 10);
            sum += matriz[i][j];
            count++;
            //Matriz por Filas
            file += matriz[i][j];
            countFile++;
        };
        promForFiles.push((file / countFile).toFixed(2));
    };

    for (let i = 0; i < columns; i++) {
        let column = 0;
        let countColumn = 0;
        for (let j = 0; j < files; j++) {
            //Matriz por Columnas
            column += matriz[j][i];
            countColumn++;
        };
        promForColumns.push((column / countColumn).toFixed(2));
    };


    const generalProm = sum / count;
    return [matriz, square, generalProm.toFixed(2), promForFiles, promForColumns];
};

