const breedName = document.getElementById('breed-name');
const dogImage = document.getElementById('dog-image');
const spinner = document.querySelector('.spinner');
const backButton = document.getElementById('back-button');

const urlParams = new URLSearchParams(window.location.search);
const breed = urlParams.get('dogbreed');

breedName.innerText = breed.charAt(0).toUpperCase() + breed.slice(1);

fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then((resp) => resp.json())
    .then((data) => {
        dogImage.src = data.message;
        dogImage.alt = `${breed}`;
        dogImage.classList.remove('hide-element');
        spinner.classList.add('hide-element');
    })
    .catch((err) => console.log(err));

backButton.addEventListener('click', () => {
    history.back();
});
