'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}
/*
 * Create the function factorial here
 */

function factorial(n) {
  
  // 1. Create a variable factorialResult to store n
  let factorialResult = n;
  
  //2. Guard close
  // If n = 0 OR n = 1, the factorial will return 1
  if(n === 0 || n === 1) {
    return 1;
  }
  
  // 3. Loop all "n" factorial 
  while(n > 1) {
      n--; // decrementation by 1 at each iteration
      factorialResult = factorialResult * n;
    }
    /* 
                    num           num--      var result      result *= num         
    1st iteration:   5             4            5             20 = 5 * 4      
    2nd iteration:   4             3           20             60 = 20 * 3
    3rd iteration:   3             2           60            120 = 60 * 2
    4th iteration:   2             1          120            120 = 120 * 1
    5th iteration:   1             0          120
    End of the WHILE loop 
    */
  // Return the factorialResult of the provided integer 
  return factorialResult; 
}

/* function factorial(n) {
    if (n < 2) {
        return 1;
    }
    return n * factorial(n-1);
} */


function main() {
    const n = +(readLine());
    
    console.log(factorial(n));
}