const usedCodes = {};

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
function randomCode(length = 4) {
  const data = '';
  
  for (let i=0; i<length; i++) {
    const maxAttempts = 100;
    let randomIndex;
    let attempts = 0;
    do {
      randomIndex = Math.floor(Math.random()*letters.length); //Pick a random letter from the set
      attempts ++;
    } while (usedCodes[randomIndex] && attempts < maxAttempts) //
    
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