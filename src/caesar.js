// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  
//inputs text to be encoded or decoded, shift refers to how many characters is shifted by (positive --->, negative <---)
//encode refers to whether the message needs to be encode or decode. Default is set to True 
function caesar(input, shift, encode = true) {

  //check for the 'shift' parameter
  if (!shift || shift === 0 || shift < -25 || shift > 25) {
    return false;
  };
  //declared empty str to hold our final result
  let newMsg = '';
  //case to handle decoding  
  if (encode === false) {
    shift = shift * (-1);
  };
  // makes sure to ingnore all capital letters
  input = input.toLowerCase();

    //loop through our 'input' str
    for (let i = 0; i < input.length; i++) {

      //converted our 'input' str to it's UTF-16 code units
      let char = input.charCodeAt(i);

      //gathers all units that are within the alphabet 97 = a, 122 = z
      if (char >= 97 && char <= 122) {

        //'newChar' holds the value of our shifted letter
        let newChar = char + shift

          //check to see any shifted letter went passed z
          if (newChar > 122) {

            //in this case we are subtracting 'newChar' by 122 which will bring us to the front
            //then adding the difference to 96 which is the unit (96 = `) right before the alphabet begins
            //then adding the new letter to the empty str. Handling cases of letters at the end of the alphabet
            char = 96 + (newChar - 122);
            newMsg += String.fromCharCode(char);

          } else {

              // case to handle negative shifts at the beginning of the alphabet
              // takes the difference and subtracts from the end of the alphabet, 'z'
              if (newChar < 97) {
                char = 122 - (96 - newChar);
                newMsg += String.fromCharCode(char);

                // will convert the shifted unit to a str and add it to the empty str, 'newMsg'
              } else {
                newMsg += String.fromCharCode(newChar);
              }
          };
    } else{
      //takes care of spaces and other non-alphabetic symbols 
      newMsg += input[i];
    };
  };
  return newMsg;
};

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
