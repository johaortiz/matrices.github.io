export const ejercicio3 = ({ files }) => {

    const matriz = [];
    for (let i = 0; i < files; i++) {
        matriz[i] = [];
    };

    for (let i = 0; i < files; i++) {
        for (let j = 0; j < files; j++) {
            //Matriz General
            i === j ? matriz[i][j] = 1 : matriz[i][j] = 0;
        };
    };

    return matriz;

}