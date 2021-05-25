// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  
  // to encode: letter to number
  const encoder = {
    a:'11',
    b:'21',
    c:'31',
    d:'41',
    e:'51',
    f:'12',
    g:'22',
    h:'32',
    i:'42',
    j:'42',
    k:'52',
    l:'13',
    m:'23',
    n:'33',
    o:'43',
    p:'53',
    q:'14',
    r:'24',
    s:'34',
    t:'44',
    u:'54',
    v:'15',
    w:'25',
    x:'35',
    y:'45',
    z:'55',
  }

  //to decode: number to letter
  const decoder = {
    11: 'a',
    21: 'b',
    31: 'c',
    41: 'd',
    51: 'e',
    12: 'f',
    22: 'g',
    32: 'h',
    42: '(i/j)',
    52: 'k',
    13: 'l',
    23: 'm',
    33: 'n',
    43: 'o',
    53: 'p',
    14: 'q',
    24: 'r',
    34: 's',
    44: 't',
    54: 'u',
    15: 'v',
    25: 'w',
    35: 'x',
    45: 'y',
    55: 'z',
  }
  //'input' = str to be encoded or decoded
  // true = encode str (default) / false = decode str
  function polybius(input, encode = true) {
    // your solution code here
    let newMsg = ''
    input = input.toLowerCase()

    // handles the case for when we need to encode
    if (encode){

      // loops through our 'input' str
      for(let alphabet of input){

        // will check if any of the characters match any keys in our encoder obj
        if(alphabet in encoder){

          // will add the values of the matched keys to the empty arr
          newMsg += encoder[alphabet]
        } else {

          //takes care of non alphabetic characters
          newMsg += alphabet
       }
      }
      //else handling the decoding portion
    } else {

      // check is the number of characters in the str, excluding spaces, is odd
      if(input.replace(/ /,'').length % 2 !== 0){
        return false
      }
      //looping through our 'input' str and we increment by two in order to gather the first number of the decoder key
      for(let i=0; i < input.length; i+=2){
        const inputed = input[i]

        //handles any spaces passed in the 'input' str
        if(inputed === ' '){
          i++
          newMsg += ' '
        }

        //combines our second number of our matched key to complete our letter
        const dec = input.substr(i,2)
        newMsg += decoder[dec] 
      }
    }
  return newMsg
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
