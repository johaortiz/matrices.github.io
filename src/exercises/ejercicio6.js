export const ejercicio6 = ({ files }) => {

    const vector1 = [];
    const vector2 = [];
    let product = 0;

    for (let i = 0; i < files; i++) {
        let number = Math.floor(Math.random() * 10);
        let number2 = Math.floor(Math.random() * 10);
        vector1[i] = number;
        vector2[i] = number2;
        product += vector1[i] * vector2[i];
    }


    return [vector1, vector2, product];

};