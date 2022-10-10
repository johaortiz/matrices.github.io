export const ejercicio7 = ({ branches }) => {

    const matriz = [];
    let totalSales = 0;

    const salesForSuc = [];
    let sucIndexMax = 0;
    let max = -100;

    const minorMonthSale = [];
    let sucIndexMin = 0;
    let min = 45454545;

    for (let i = 0; i < branches; i++) {
        matriz[i] = [];
    };

    for (let i = 0; i < branches; i++) {
        for (let j = 0; j < 12; j++) {
            matriz[i][j] = Math.floor(Math.random() * 100);
            totalSales += matriz[i][j];
        };
    };

    for (let i = 0; i < branches; i++) {
        let totalSale = 0;
        for (let j = 0; j < 12; j++) {
            totalSale += matriz[i][j];
        };
        salesForSuc.push(totalSale);
    };

    for (let i = 0; i < salesForSuc.length; i++) {
        if (salesForSuc[i] >= max) {
            max = salesForSuc[i];
            sucIndexMax = i;
        };
    };

    for (let i = 0; i < 12; i++) {
        minorMonthSale[i] = 0;
        for (let j = 0; j < branches; j++) {
            minorMonthSale[i] += matriz[j][i];
        };
    };


    for (let i = 0; i < 12; i++) {
        if (minorMonthSale[i] <= min) {
            min = minorMonthSale[i];
            sucIndexMin = i;
        };
    };

    return [matriz, totalSales, sucIndexMax, max, sucIndexMin, min];

};

