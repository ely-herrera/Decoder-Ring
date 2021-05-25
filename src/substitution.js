// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {

  // you can add any code you want within this function scope
  const standardAlphabet = 'abcdefghijklmnopqrstuvwxyz'

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    //Initial checks for false cases:
    if(!alphabet || alphabet.length !== 26 ) return false;
    // check for duplicate characters
    for(let i = 0; i < alphabet.length-1; i++) {
      if(alphabet.includes(alphabet[i], i+1)) return false;
    };  
   

    let newMsg = '';
    input = input.toLowerCase();

    //case for encoding 'input'
    if (encode){

      //loop through out 'input' str
      for (let inputed of input){
        
        // gathering the indexs of the inputed alphabet and matching our standard alphabet
        const newIndex = standardAlphabet.indexOf(inputed); 

        // takes in account for spaces
        if(newIndex < 0){
          newMsg += inputed;
        } else {

          // adds the matched indexs to the empty str based off the alphabet passed in
          newMsg += alphabet[newIndex];
        }
      }

      //decoding portion 
    } else {
      for (let inputed of input){

        //almost the same as encoding but we are now matching our passed in alphabet rather than the standard
        const newIndex = alphabet.indexOf(inputed) 
        if(newIndex < 0){
          newMsg += inputed;
        } else {

          //adding the matched indexs based off of the standard alphabet
          newMsg += standardAlphabet[newIndex];
        }
      }
    }
    return newMsg;
  }


  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
