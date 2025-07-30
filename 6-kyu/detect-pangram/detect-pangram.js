function isPangram(string) {
   
    const lowerStr = string.toLowerCase();
     
    const foundLetters = new Set();
    
    for (let char of lowerStr) {
       
        if (char >= 'a' && char <= 'z') {
            foundLetters.add(char);
        }
    }
  
    return foundLetters.size === 26;
}