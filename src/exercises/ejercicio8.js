export const ejercicio8 = ({ studends }) => {

    const matriz = [];
    const promStudents = [];
    const studentsAprobedOrNo = [];
    const promMatters = [];

    for (let i = 0; i < studends; i++) {
        matriz[i] = [];
    };

    for (let i = 0; i < studends; i++) {
        let promForStudent = 0;
        for (let j = 0; j < 6; j++) {
            matriz[i][j] = Math.floor(Math.random() * 10) + 1;
            promForStudent += matriz[i][j]
        };
        promStudents.push((promForStudent / 6).toFixed(2));
    };

    for (let i = 0; i < 6; i++) {
        let aprobed = 0;
        let desaprobed = 0;
        let matter = 0;
        for (let j = 0; j < studends; j++) {
            matriz[j][i] >= 6 ? aprobed++ : desaprobed++;
            matter += matriz[j][i];
        };
        promMatters.push((matter / studends).toFixed(2));
        studentsAprobedOrNo.push([aprobed, desaprobed]);
    };

    return [matriz, promStudents, studentsAprobedOrNo, promMatters];

};
