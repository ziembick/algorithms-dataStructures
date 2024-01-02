function charCount(str) {
  //make object to return at en
  let result = {};
  // loop over string, for each character
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    //if the char is a number/letter AND is a key in object, add one to count
    if (result[char] > 0) {
      result[char]++;
    }
    //if the char is a number/letter AND not in object, add it to object and set value to 1
    else {
      result[char] = 1;
    }
  }

  // if character is something else (space, period, etc.) don't do anything
  //return object at end
  return result;
}


function charCount(str) {
    
  let obj = {}
  for (var char of str) {
      char = char.toLowerCase();
      if (isAlphaNumeric(char)){
          obj[char] = ++obj[char] || 1;
          }
      }
  return obj;

}

function isAlphaNumeric(char) {
  var code = char.charCodeAt(0)
  if(!(code > 47 && code < 58) && // numeric (0-9)
      !(code > 64 && code < 93) && //upper alpha (A-Z)
      !(code > 96 && code < 123)) { // lower alpha (a-z)
          return false
      } 
  return true
}

charCount("Hi there")