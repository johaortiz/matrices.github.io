export const ejercicio2 = ({ files, columns }) => {

    const matriz = [];
    const matrizTrans = [];
    //Matriz a
    for (let i = 0; i < files; i++) {
        matriz[i] = [];
    };

    //Matriz b
    for (let i = 0; i < columns; i++) {
        matrizTrans[i] = [];
    };


    for (let i = 0; i < files; i++) {
        for (let j = 0; j < columns; j++) {
            let number = Math.floor(Math.random() * 10);
            matriz[i][j] = number;
            matrizTrans[j][i] = matriz[i][j]
        };
    };

    return [matriz, matrizTrans];

};