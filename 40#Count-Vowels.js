// Count vowels in a string, 5 vowels are 'a', 'e', 'i', 'o', 'u'

function countVowels(str) {
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') count += 1;
    }
    console.log(count);
}

countVowels('ebocd');
countVowels('susovan');