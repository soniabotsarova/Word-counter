const inputText = document.querySelector('#text');
const statElem = document.querySelector('#stat');
const twitterMessage = document.querySelector('#twitter');
const linkedinMessage = document.querySelector('#linkedin');

inputText.addEventListener('input', () => {
    const text = inputText.value;

    // count the words
    const nbWords = text.split([' ']).filter(word => word.length > 0).length;

    //count the characters
    const nbNoSpace = text.replaceAll(' ', '').length;
    statElem.innerHTML = `You've written <span class="fw-bold">${nbWords}</span> words and <span class="fw-bold">${nbNoSpace}</span> characters.`;

    //count twitter characters
    if(nbNoSpace >= 280) {
        twitterMessage.innerHTML = `Oops! That's too many characters for Twitter.`;
    }
    else if (nbNoSpace === 0) {
        twitterMessage.innerHTML = `Start typing...`
    }
    else {
        twitterMessage.innerHTML = `You're within the chatacter limit.`;
    }

    //count linkedin characters
    if(nbNoSpace >= 1300) {
        linkedinMessage.innerHTML = `Oops! That's too many characters for LinkedIn.`;
    }
    else if (nbNoSpace === 0) {
        linkedinMessage.innerHTML = `Start typing...`
    }
    else {
        linkedinMessage.innerHTML = `You're within the character limit.`;
    }
});

