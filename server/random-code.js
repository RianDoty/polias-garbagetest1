const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
module.exports = function randomCode(length = 4) {
  const data = '';
  
  for (let i=0; i<length; i++) {
    const randomIndex = Math.floor(Math.random()*letters.length);
    
    data += letters[randomIndex];
  }
  
  return data
}