function calculate(str) {
  
let arr= str.split("plus").join("+").split("minus").join("-").split(/(?=[+-])/);
  
return arr.reduce((sum,n)=> sum + Number(n), 0).toString();
}
​