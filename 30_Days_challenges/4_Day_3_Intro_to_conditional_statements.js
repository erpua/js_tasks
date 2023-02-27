'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const N = parseInt(readLine().trim(), 10);
    
    // If n is odd, print Weird
    // If n is even and in the inclusive range of 6 to 20, print Weird
      if (N % 2 !== 0 || (N >= 6 && N <= 20)) {
          // Print Weird
           console.log("Weird");
      } else {
          // If n is even and in the inclusive range of 2 to 5, print Not Weird
          // If n is even and greater than 20, print Not Weird
          console.log("Not Weird");
      }
    
}
