export const ejercicio5 = ({ files, columns, files1, columns1 }) => {
    files1 = columns;
    const matrizA = [];
    const matrizB = [];
    const matrizC = [];
    //Matriz A y C
    for (let i = 0; i < files; i++) {
        matrizA[i] = [];
        matrizC[i] = [];
    };

    //Matriz B
    for (let i = 0; i < files1; i++) {
        matrizB[i] = [];
    };

    //Matriz A
    for (let i = 0; i < files; i++) {
        for (let j = 0; j < columns; j++) {
            let number = Math.floor(Math.random() * 10);
            matrizA[i][j] = number;
        };
    };

    //Matriz B
    for (let i = 0; i < files1; i++) {
        for (let j = 0; j < columns1; j++) {
            let number = Math.floor(Math.random() * 10);
            matrizB[i][j] = number;
        };
    };

    //Matriz C
    for (let i = 0; i < files; i++) {
        for (let j = 0; j < columns1; j++) {
            matrizC[i][j] = 0;
        };
    };

    //Calcular
    for (let i = 0; i < files; i++) {
        for (let j = 0; j < columns1; j++) {
            for (let k = 0; k < files1; k++) {
                matrizC[i][j] += (matrizA[i][k] * matrizB[k][j]);
            }
        }
    }

    return [matrizA, matrizB, matrizC];


};

