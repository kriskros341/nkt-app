import fs from 'fs'
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
const temperatureFilePath = "./temperature2.csv"
const temperaturesString = fs.readFileSync(temperatureFilePath);
const temperaturesMatrix = temperaturesString.toString().trim().split('\n').map(line => line.trim().split(SHEETS_DELIMITER).map(str => str.trim()));
const temperatureObj = CSVtoObj(temperaturesMatrix)

const obwodyFilePath = "./liczba_obwodow.csv"
const obwodyString = fs.readFileSync(obwodyFilePath);
const obwodyMatrix = obwodyString.toString().trim().split('\n').map(line => line.trim().split(SHEETS_DELIMITER).map(str => str.trim()));
const obwodyObj = Object.fromEntries(obwodyMatrix)

const temperatureGruntFilePath = "./temperature_grunt2.csv"
const temperaturesGruntString = fs.readFileSync(temperatureGruntFilePath);
const temperaturesGruntMatrix = temperaturesGruntString.toString().trim().split('\n').map(line => line.trim().split(SHEETS_DELIMITER).map(str => str.trim()));
const temperatureGruntObj = CSVtoObj(temperaturesGruntMatrix)
console.log(temperatureGruntObj)


const EFcables = temperatureObj["temperatura otoczenia (powietrza) st C"]
const D1D2cables = temperatureObj["temperatura otoczenia (powietrza) st C"]

export function algorithm1(input, temperatura) {
    var k=1;
    /* if Iobl given*/
    /* if P and cos(fi) given*/
    const index = EFcables.indexOf(input["przewód/kabel"])
    const index2 = D1D2cables.indexOf(input["przewód/kabel"])

    const metodaReferencyjna = input["metoda referencyjna"];
    console.log(input)
    if(metodaReferencyjna=="E"||"F") {
        k *= parseFloat(temperatureObj[temperatura][index].replace(",", "."))
    }
    if(metodaReferencyjna != "D1"||"D2"){
        console.log(obwodyObj[input["Liczba przewodów wielożyłowych"]])
        k*= parseFloat(obwodyObj[input["Liczba przewodów wielożyłowych"]].replace(",", "."))
    }
    if(metodaReferencyjna=="D1"||"D2"){
        console.log(temperatureGruntObj[temperatura][index2])
        k*=parseFloat(temperatureGruntObj[temperatura][index2].replace(",", "."))
    }
    console.log(k)
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