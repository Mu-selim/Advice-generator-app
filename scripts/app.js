const buttonFetch = document.querySelector('.buttonFetch');
const adviceNumber = document.querySelector('.adviceNumber');
const qoute = document.querySelector('.qoute');

let fetchAPI = async ()=> {
    await fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(response => {
        adviceNumber.innerHTML = response.slip.id;
        qoute.innerHTML = `"${response.slip.advice}"`;
    })
    .catch(error => console.error(error));
}

onload = ()=> {
    fetchAPI();
}

buttonFetch.addEventListener('click', ()=> {
    fetchAPI();
});