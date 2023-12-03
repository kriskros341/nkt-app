
const CSVtoObj = (csv) => {
    const obj = {};
    csv.forEach((row) => {
        obj[row[0]] = row.slice(1)
    })
    return obj
}
function transpose(matrix) {
    return matrix[0].map((col, c) => matrix.map((row, r) => matrix[r][c]));
}
const SHEETS_DELIMITER = ";"

const temperaturesString = `
temperatura otoczenia (powietrza) st C;YDY 450/750 V;YDYp 450/750 V;YKY 0,6/1kV;YKXS 0,6/1kV;YAKXS 0,6/1kV;N2XH 0,6/1kVz
10;1,22;1,22;1,22;1,15;1,15;1,15
15;1,17;1,17;1,17;1,12;1,12;1,12
20;1,12;1,12;1,12;1,08;1,08;1,08
25;1,06;1,06;1,06;1,04;1,04;1,04
30;1;1;1;1;1;1
35;0,94;0,94;0,94;0,96;0,96;0,96
40;0,87;0,87;0,87;0,91;0,91;0,91
45;0,79;0,79;0,79;0,87;0,87;0,87
50;0,71;0,71;0,71;0,82;0,82;0,82
55;0,61;0,61;0,61;0,76;0,76;0,76
60;0,5;0,5;0,5;0,71;0,71;0,71
65;;;;0,65;0,65;0,65
70;;;;0,58;0,58;0,58
75;;;;0,5;0,5;0,5
80;;;;0,41;0,41;0,41
`
const temperaturesMatrix = temperaturesString.toString().trim().split('\n').map(line => line.trim().split(SHEETS_DELIMITER).map(str => str.trim()));
const temperatureObj = CSVtoObj(temperaturesMatrix)

const obwodyString = `Liczba przewodów wielożyłowych/ obwodów;kolumna A 
1;1
2;0,8
3;0,7
4;0,65
5;0,6
6;0,57
7;0,54
8;0,52
9;0,5
`
const obwodyMatrix = obwodyString.toString().trim().split('\n').map(line => line.trim().split(SHEETS_DELIMITER).map(str => str.trim()));
const obwodyObj = Object.fromEntries(obwodyMatrix)

const temperaturesGruntString = `
temperatura otoczenia (gruntu) st C;YDY 450/750 V;YDYp 450/750 V;YKY 0,6/1kV;YKXS 0,6/1kV;YAKXS 0,6/1kV;N2XH 0,6/1kV
10;;;1,1;1,07;1,07;
15;;;1,05;1,04;1,04;
20;;;1;1;1;
25;;;0,95;0,96;0,96;
30;;;0,89;0,93;0,93;
35;;;0,84;0,89;0,89;
40;;;0,77;0,85;0,85;
45;;;0,71;0,8;0,8;
50;;;0,63;0,76;0,76;
55;;;0,55;0,71;0,71;
60;;;0,45;0,65;0,65;
65;;;;0,6;0,6;
70;;;;0,53;0,53;
75;;;;0,46;0,46;
80;;;;0,38;0,38;
`
const temperaturesGruntMatrix = temperaturesGruntString.toString().trim().split('\n').map(line => line.trim().split(SHEETS_DELIMITER).map(str => str.trim()));
const temperatureGruntObj = CSVtoObj(temperaturesGruntMatrix)
console.log(temperatureGruntObj)


const EFcables = temperatureObj["temperatura otoczenia (powietrza) st C"]
const D1D2cables = temperatureObj["temperatura otoczenia (powietrza) st C"]

export const alg1 = (input, temperatura) => {

}

export const alg2 = (input, temperatura) => {

}

export function algorithm1(input, temperatura) {
    input["Liczba przewodów wielożyłowych"] = 3
    var k = 1;

    /* if Iobl given*/
    /* if P and cos(fi) given*/
    const index = EFcables.indexOf(input["przewód/kabel"])
    const index2 = D1D2cables.indexOf(input["przewód/kabel"])

    const metodaReferencyjna = input["metoda referencyjna"];

    if (metodaReferencyjna == "E" || "F") {
        k *= parseFloat(temperatureObj[temperatura][index].replace(",", "."))
    }
    if (!["D1", "D2"].includes(metodaReferencyjna)) {
        k *= parseFloat(obwodyObj[input["Liczba przewodów wielożyłowych"]].replace(",", "."))
    }
    if (["D1", "D2"].includes(metodaReferencyjna)) {
        k *= parseFloat(temperatureGruntObj[temperatura][index2].replace(",", "."))
    }
    return k;
}


// function algorithm2(input) {
//     var k=1;
//     /* if Iobl given*/
//     /* if P and cos(fi) given*/
//     const metodaReferencyjna = input["metoda referencyjna"];
//     if(input.metodaReferencyjna=="E"||"F") {
//         k=k*/*odpowiednia rzecz z csv Powietrze30*/
//     }
//     if(!input.metodaReferencyjna=="D1"||"D2"){
//         k=k*/*odpowiednia rzecz z LiczbaPrzewodow*/
//     }
//     if(input.metodaReferencyjna=="D1"||"D2"){
//         k=k*/*odpowiednia rzecz z Bezp20*/
//     }
// }