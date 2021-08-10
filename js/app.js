const inputText = document.querySelector('#text');
const statElem = document.querySelector('#stat');

inputText.addEventListener('input', () => {
    const text = inputText.value;

    // count the words
    const nbWords = text.split([' ']).filter(word => word.length > 0).length;

    //count the characters
    const nbNoSpace = text.replaceAll(' ', '').length;
    statElem.innerHTML = `You've written ${nbWords} words and ${nbNoSpace} characters without spaces.`
});