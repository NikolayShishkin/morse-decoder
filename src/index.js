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
  '-----': '0'
};

function decode(expr) {
  const lettersArray = [];
  let letter, letterPart;
  for (let i = 0; i < expr.length / 10; i += 1) {
    lettersArray[i] = '';
    letter = expr.substring(i * 10, i * 10 + 10);
    if (letter == '**********') {
      lettersArray[i] = ' ';
    } else {
      letter = parseInt(+letter).toString();
      letter = letter.replace(/10/g, '.');
      letter = letter.replace(/11/g, '-');
      lettersArray[i] = MORSE_TABLE[letter];
    }
  }
  return lettersArray.join('');
}

module.exports = {
  decode
};
