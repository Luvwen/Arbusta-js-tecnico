// Métodos HTTP:

//Método Get: sirve para traer información de una API y poder consumirla del lado del front.
//Método Post: sirve para pushear información hacía el lado servidor por ej: hacer un post de un formulario con los datos ingresados por el usuario.

// Ejercicio 1

/*
 * Enunciado: Dado un array de enteros ordenado y sin repetidos,
 * crea una función que calcule y retorne todos los que faltan entre
 * el mayor y el menor.
 * - Lanza un error si el array de entrada no es correcto.
 */

const sortAndFillNumbers = (arr) => {
    if (arr.find((el) => typeof el !== 'number'))
        return 'Incorrecto, ingrese un array de números';

    const sortedArr = arr.sort((a, b) => b - a);
    const numbersBetween = [];

    for (let i = sortedArr[0] - 1; i > sortedArr[1]; i--) {
        numbersBetween.push(i);
    }
    return numbersBetween;
};

console.log(sortAndFillNumbers([10, 2]));

// Ejercicio 2

/*
 * Crea una función que ordene y retorne una matriz de números.
 * - La función recibirá un listado (por ejemplo [2, 4, 6, 8, 9]) y un parámetro
 *   adicional "Asc" o "Desc" para indicar si debe ordenarse de menor a mayor
 *   o de mayor a menor.
 * - No se pueden utilizar funciones propias del lenguaje que lo resuelvan
 *   automáticamente.
 */

const sortArr = (arr, order) => {
    let sortedArr = [];
    if (order === 'Asc') {
        sortedArr = arr.sort((a, b) => a - b);
    } else {
        sortedArr = arr.sort((a, b) => b - a);
    }

    return sortedArr;
};

console.log(sortArr([5, 2, 7, 10], 'Asc'));

// Ejercicio 3

/*
 * Crea un programa que calcule quien gana más partidas al piedra,
 * papel, tijera.
 * - El resultado puede ser: "Jugador 1", "Jugador 2", "Empate"
 * - La función recibe un listado que contiene pares, representando cada jugada.
 * - El par puede contener combinaciones de "R" (piedra), "P" (papel)
 *   o "S" (tijera).
 * - Ejemplo. Entrada: [("R","S"), ("S","R"), ("P","S")]. Resultado: "Jugador 2".
 */

const calcWhoWinMoreTimes = (arr) => {
    let player1 = 0;
    let player2 = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] === 'S' && arr[i][1] === 'P') {
            player1++;
        } else if (arr[i][0] === 'R' && arr[i][1] === 'S') {
            player1++;
        } else if (arr[i][0] === 'P' && arr[i][1] === 'R') {
            player1++;
        } else if (arr[i][0] === arr[i][1]) {
            continue;
        } else {
            player2++;
        }
    }
    if (player1 === player2) return 'draw';

    return player1 > player2 ? 'player1' : 'player2';
};

console.log(
    calcWhoWinMoreTimes([
        ['R', 'S'],
        ['S', 'R'],
        ['P', 'S'],
        ['S', 'P'],
        ['R', 'S'],
        ['S', 'R'],
        ['S', 'R']
    ])
);

// Ejercicio 6

/* Crea una función que reciba un String de cualquier tipo y se encargue de
 * poner en mayúscula la primera letra de cada palabra.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente.
 */

const convertFirstLetterToUppercase = (str) => {
    const alphabet = {a: 'A',b: 'B',c: 'C',d: 'D',e: 'E',f: 'F',g: 'G',h: 'H',i: 'I',j: 'J',k: 'K',l: 'L',m: 'M',n: 'N',o: 'O',p: 'P',q: 'Q',r: 'R',s: 'S',t: 'T',u: 'U',v: 'V',w: 'W',x: 'X',y: 'Y',z: 'Z'};
    
    if(alphabet[str[0]] === undefined) return str

    let newWord = str;
    let newWordFirstLetter = newWord[0];
    newWordFirstLetter = alphabet[newWordFirstLetter];
    return newWordFirstLetter + newWord.slice(1);
};

console.log(convertFirstLetterToUppercase('santiago'));

// Ejercicio 7

/*
 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
 */

const countRepeatWord = (arr) => {
    const repeatedWords = {};

    for (let i = 0; i < arr.length; i++) {
        const word = arr[i].toLowerCase();
        if (!repeatedWords[word]) {
            repeatedWords[word] = 1;
        } else {
            repeatedWords[word]++;
        }
    }

    for (let word in repeatedWords) {
        console.log(
            `La palabra ${word} se repitió una cantidad total de: ${repeatedWords[word]}`
        );
    }
};

console.log(
    countRepeatWord([
        'Santiago',
        'pez',
        'pez',
        'SANTIAGO',
        'Santiago',
        'pez',
        'hola'
    ])
);

// Ejercicio 4

//Divisor común máximo
const highestCommonFactor = (a, b) => {
    let tempNumber;

    while (b !== 0) {
        tempNumber = b;
        b = a % b;
        a = tempNumber;
    }
    return a;
};

//Mínimo común multiplo
const lowestCommonMultiple = (a, b) => {
    return (a * b) / highestCommonFactor(a, b);
};

console.log(highestCommonFactor(50, 7));
console.log(lowestCommonMultiple(50, 7));

//Ejercicio 5

const calcMilisecondsFromDate = (days, hours, minutes, seconds) => {
    return (
        seconds * 1000 +
        minutes * 60 * 1000 +
        hours * 60 * 60 * 1000 +
        days * 24 * 60 * 60 * 1000
    );
};

console.log(calcMilisecondsFromDate(1, 24, 60, 60));
