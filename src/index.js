module.exports = function reverse (n) {
    let newString = Math.abs(n).toString();
    
    let result = []; 
    for (let i = newString.length; i > 0; i-- ){
      
    result = result + newString[i - 1];

    }
   
    return result;
}
