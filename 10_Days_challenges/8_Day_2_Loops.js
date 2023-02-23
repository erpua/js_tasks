let s = 'javeasecriptuey';

function vowelsAndConsonants(s) {

    const vowels = 'aeiouy';
    let consonants = '';
    
    for( let i = 0; i < s.length; i++ ) {
       if (vowels.includes(s[i])) {
           console.log(s[i]);
       }
       else {
           consonants += s[i] + '\n';
       }
    }
    
    console.log(consonants);
}

/*   let vowels = ['a', 'e', 'i', 'o', 'u'];
    let consonants = "";

    for(let i = 0; i < s.length; i++) {
        if (vowels.indexOf(s[i]) !== -1) {
            console.log(s[i]);
        } else {
            consonants += s[i] + '\n';
        }
    }
    console.log(consonants); */
 
vowelsAndConsonants(s);
