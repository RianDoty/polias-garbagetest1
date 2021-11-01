const usedCodes = {};

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
function randomCode(length = 4) {
  const data = '';
  
  for (let i=0; i<length; i++) {
    const randomIndex = Math.floor(Math.random()*letters.length);
    
    data += letters[randomIndex];
  }
  
  //Register a code as used
  usedCodes[data] = true;
  
  return data
}

function unregisterCode(code='') {
  //Make a code usable now that it doesn't have a purpose anymore
  delete usedCodes[code];
}

module.exports = {randomCode, unregisterCode}