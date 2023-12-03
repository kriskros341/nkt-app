import fs from 'fs'
import { final } from './functions.js'

// obwod: - "1 fazowy" | "3 fazowy"
// metoda: - "A1", "A2", "B1", "B2"

const getMatchingIndexes = (obj, key, value, indexes) => {
    if (!indexes) {
        indexes = obj[key].map((_, i) => i);
    }
    const newIndexes = obj[key].reduce((acc, curr, index) => {
        if (curr === value && indexes.includes(index)) {
            acc.push(index)
        }
        return acc
    }, [])
    return newIndexes
}

const getFilteredIndexes = (specification, input) => {
    let filteredIndexes = null;
    Object.entries(input).forEach(([key, val]) => {
        filteredIndexes = getMatchingIndexes(specification, key, val, filteredIndexes)
    })
    return filteredIndexes
}

const CSVtoObj = (csv) => {
    const obj = {};
    csv.forEach((row) => {
        obj[row[0]] = row.slice(1)
    })
    return obj
}

const EXCEL_DELIMITER = ';'
const SHEETS_DELIMITER = '\t'

let input = {
    "obwód": "1 fazowy",
    "metoda referencyjna": "E",
    "izolacja": "XLPE",
    "rodzaj żyły (metal)": "Al."
}
function transpose(matrix) {
    return matrix[0].map((col, c) => matrix.map((row, r) => matrix[r][c]));
  }
const test = (specificationFilePath, referenceFilePath) => {

    const specificationValues = fs.readFileSync(specificationFilePath);
    const referenceValues = fs.readFileSync(referenceFilePath);
    const specificationMatrix = specificationValues.toString().trim().split('\n').map(line => line.trim().split(SHEETS_DELIMITER).map(str => str.trim()));
    const referenceMatrix = referenceValues.toString().trim().split('\n').map(line => line.trim().split(SHEETS_DELIMITER).map(str => str.trim()));

    const specification = CSVtoObj(specificationMatrix);
    const reference = CSVtoObj(referenceMatrix)

    console.log(specification)
    const indexes = getFilteredIndexes(specification, input)
    const specificationKeys = Object.keys(specification)
    const values = specificationMatrix.map((row) => row.filter((_, index) => indexes.includes(index-1)))
    const g = [specificationKeys, values.flat()]
    return Object.fromEntries(transpose(g))
    //const result = Object.fromEntries()
}



const c = {
    "installationMethod": "metoda referencyjna",
    "metal": "rodzaj żyły (metal)",
    "insulator": "izolacja",
    "numberOfStrands": ""

}

input = test("SPECIFICATION.tsv", "REFERENCE.tsv")
input["Liczba przewodów wielożyłowych"] = '3' // ????????SKAD?????
const temperature = 30
console.log(final(input, temperature));
// const nazwa = "ydy"
// const nazwa = "ntk"
