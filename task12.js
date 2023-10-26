function reverseStringWithException(str, exception) {
    const words = str.split('');
    const reverseWord = words.map(word => (word === exception) ? word : word.split('').reverse().join(''));
    return reverseWord.join('');
}

console.log(reverseStringWithException('smth, contr'));
