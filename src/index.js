const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let str = expr;
    let substr = '';
    let mas = [];
    let resStr = '';

    let i = 0;
    while (str.length > 0) {

        substr = '';
        for (let j = 0; j < 10; j += 2) {
            if ((str[j] == '1') && (str[j + 1] == '1')) {
                substr += '-';
            }
            if ((str[j] == '1') && (str[j + 1] == '0')) {
                substr += '.';
            }
            if ((str[j] == '*') && (str[j + 9] == '*')) {
                substr += ' ';
                // break;
                j = 10;
            }

        }
        mas.push(substr);
        // сокращаем строку на 10 символов слева
        str = str.substring(10);

    }

    for (let i = 0; i < mas.length; i++) {
        if (mas[i] == ' ') {
            resStr += ' ';

        } else {
            resStr += MORSE_TABLE[mas[i]];
        }



    }


    console.log(expr);
    console.log(resStr);
    // write your solution here
    return resStr;
}

module.exports = {
    decode
}


// console.log(decode('00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010')); 