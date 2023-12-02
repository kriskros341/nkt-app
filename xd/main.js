import fs from 'fs'

// obwod: - "1 fazowy" | "3 fazowy"
// metoda: - "A1", "A2", "B1", "B2"

const getMatchingIndexes = (obj, key, value, indexes) => {
    if (!indexes) {
        indexes = obj[key].map((_, i) => i);
    }
    const d = obj[key].reduce((acc, curr, index) => {
        if (curr === value && indexes.includes(index)) {
            acc.push(index)
        }
        return acc
    }, [])
    return d
}

const dobierzWynik = (wobj, index) => {
    return wobj.map(row => row[index+1])
}

const filter = (reference, csv, input) => {
    let filteredIndexes = null;
    Object.entries(input).forEach(([key, val]) => {
        filteredIndexes = getMatchingIndexes(csv, key, val, filteredIndexes)
    })
    if (filteredIndexes.length !== 1) {
        throw "wiecej niz 1 wwynik"
    }
    console.log("wybrany index: " + filteredIndexes[0])
    return dobierzWynik(reference, filteredIndexes[0])
}

const CSVtoObj = (csv) => {
    const obj = {};
    csv.forEach((row) => {
        obj[row[0]] = row.slice(1)
    })
    return obj
}

const test = (plik_parametry, plik_wyniki) => {
    
    const wejsicowe = fs.readFileSync(plik_parametry);
    const wynikowe = fs.readFileSync(plik_wyniki);
    const data = wejsicowe.toString().trim().split('\n').map(line => line.trim().split(';').map(str => str.trim()))
    const referenceValues2d = wynikowe.toString().trim().split('\n').map(line => line.trim().split(';').map(str => str.trim()))

    const g = CSVtoObj(data)
    

    const input = {
        "obwód": "1 fazowy",
        "metoda referencyjna": "A2"
    }

    const i = filter(referenceValues2d, g, input)

    console.log(i)
}

// const nazwa = "ydy"

const nazwa = "ntk"

test(`${nazwa}.csv`, `wyniki_${nazwa}.csv`)