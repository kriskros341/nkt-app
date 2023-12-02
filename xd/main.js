import fs from 'fs'


const jd = fs.readFileSync('ydy.csv');

const data = jd.toString().trim().split('\n').map(line => line.trim().split(';').map(str => str.trim()))

const keys = ["izolacja",
"rodzaj",
"temp_o",
"temp_z",
"nazwa",
"obwod",
"liczba zyl",
"liczba zyl obciazonych",
"metoda referencyjna"]
// obwod: - "1 fazowy" | "3 fazowy"
// metoda: - "A1", "A2", "B1", "B2"

const toObj = (obj, indexes) => {
    const temp = {}
    Object.entries(obj).forEach(([key, values]) => {
        temp[key] = values.filter((_, index) => indexes.includes(index))
    })
    return temp
}

const getMatchingIndexes = (obj, key, value) => {
    const d = obj[key].reduce((acc, curr, index) => {
        if (curr === value) {
            acc.push(index)
        }
        return acc
    }, [])
    return d
}

const test = (obwod, metoda) => {
    const g = {
        [keys[0]]: data[0],
        [keys[1]]: data[1],
        [keys[2]]: data[2],
        [keys[3]]: data[3],
        [keys[4]]: data[4],
        [keys[5]]: data[5],
        [keys[6]]: data[6],
        [keys[7]]: data[7],
        [keys[8]]: data[8],
    };

    const filteredIndexes = getMatchingIndexes(g, "obwod", "1 fazowy");
    const g2 = toObj(g, filteredIndexes)

    const filteredIndexes2 = getMatchingIndexes(g2, "metoda referencyjna", "A1");
    const g3 = toObj(g2, filteredIndexes2)

    console.log(filteredIndexes2)

}

test("1 fazowy")