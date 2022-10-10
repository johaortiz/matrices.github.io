export const ejercicio4 = ({ files, columns, k }) => {

    const matriz = [];
    const matrizSinK = [];
    for (let i = 0; i < files; i++) {
        matriz[i] = [];
        matrizSinK[i] = [];
    };



    for (let i = 0; i < files; i++) {
        for (let j = 0; j < columns; j++) {
            let number = Math.floor(Math.random() * 10);
            matrizSinK[i][j] = number;
            matriz[i][j] = number*k;
        };
    };


    return [matrizSinK, matriz];

};