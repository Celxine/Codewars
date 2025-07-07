function order(words) {
  if (!words) return ""; 
​
  return words.split(" ").sort((a, b) => {     
      return a.match(/\d/) - b.match(/\d/);
    }).join(" "); 
}
​