const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let array = [];
    let k = 0;
    for(let i = 0; i<expr.length/10; i++){
        
        array[i] = expr.slice(k,k+10);
        
        array[i] = array[i].replace(/^0+/, '').replace(/10/g, '.').replace(/11/g, '-').replace('**********',' ');
        
        k+=10;
        
        if(array[i]!==' '){
          array[i] = MORSE_TABLE[array[i]];
        }       
    }   
    return array.join('');
}

module.exports = {
    decode
}