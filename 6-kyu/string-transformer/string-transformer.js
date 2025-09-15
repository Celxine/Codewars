function stringTransformer(str) {
  return str.split(' ')     
    .reverse()                    
    .join(' ')                    
    .split('')                     
    .map(word => word === word.toLowerCase() ? word.toUpperCase() : word.toLowerCase())  
    .join('');                     
  }