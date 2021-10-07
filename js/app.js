const inputText = document.querySelector('#text');
const statElem = document.querySelector('#stat');
const twitterMessage = document.querySelector('#twitter');
const linkedinMessage = document.querySelector('#linkedin');

// inputText.addEventListener('keypress', (event) => {
//     if(event.charCode === 13){
//         event.preventDefault();
//     }
// });

inputText.addEventListener('input', () => {

    const text = inputText.value;

    // count the words
    const nbWords = text.replaceAll('\n', ' ').split(' ').filter(word => word.length > 0).length;

    //count the characters
    const nbNoSpace = text.replaceAll(' ', '').length;
    statElem.innerHTML = `You've written <span class="fw-bold">${nbWords}</span> words and <span class="fw-bold">${nbNoSpace}</span> characters.`;

    //count twitter characters
    if(nbNoSpace >= 280) {
        twitterMessage.innerHTML = `Oops! Too many characters for Twitter.`;
        twitterMessage.style.color = "red";
    }
    else if (nbNoSpace === 0) {
        twitterMessage.innerHTML = `Start typing...`;
        twitterMessage.style.color = "black";
    }
    else {
        twitterMessage.innerHTML = `You're within the chatacter limit.`
        twitterMessage.style.color = "black";
    }

    //count linkedin characters
    if(nbNoSpace >= 1300) {
        linkedinMessage.innerHTML = `Oops! Too many characters for LinkedIn.`;
        linkedinMessage.style.color = "red";
    }
    else if (nbNoSpace === 0) {
        linkedinMessage.innerHTML = `Start typing...`;
        linkedinMessage.style.color = "black";
    }
    else {
        linkedinMessage.innerHTML = `You're within the character limit.`;
        linkedinMessage.style.color = "black";
    }
});

