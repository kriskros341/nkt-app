import fs from 'fs'


// obwod: - "1 fazowy" | "3 fazowy"
// metoda: - "A1", "A2", "B1", "B2"

const getMatchingIndexes = (obj, key, value, indexes) => {
    console.log(obj)
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

const test = (specificationFilePath, referenceFilePath) => {

    const specificationValues = fs.readFileSync(specificationFilePath);
    const referenceValues = fs.readFileSync(referenceFilePath);
    const specificationMatrix = specificationValues.toString().trim().split('\n').map(line => line.trim().split(SHEETS_DELIMITER).map(str => str.trim()));
    const referenceMatrix = referenceValues.toString().trim().split('\n').map(line => line.trim().split(SHEETS_DELIMITER).map(str => str.trim()));

    const specification = CSVtoObj(specificationMatrix);
    const reference = CSVtoObj(referenceMatrix)

    const input = {
        "obwód": "1 fazowy",
        "metoda referencyjna": "A2",
        "izolacja": "XLPE",
        "rodzaj żyły (metal)": "Al."
    }

    const indexes = getFilteredIndexes(specification, input)
    console.log(indexes)
    console.log(referenceMatrix.map((row) => row.filter((_, index) => indexes.includes(index-1))))
}

// const nazwa = "ydy"
// const nazwa = "ntk"
const nazwa = "yky"

test(`SPECIFICATION.tsv`, `REFERENCE.tsv`)