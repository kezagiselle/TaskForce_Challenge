function transformString(input) {
    let length = input.length;
    let result = input;

    if (length % 3 === 0 && length % 5 === 0) {
    
        result = result.split('').reverse().join('');
        result = result.split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 3 === 0) {

        result = result.split('').reverse().join('');
    } else if (length % 5 === 0) {
        
        result = result.split('').map(char => char.charCodeAt(0)).join(' ');
    }

    return result;
}


const input = "Hello World";
console.log(transformString(input));  
