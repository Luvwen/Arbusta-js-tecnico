const unorderedList = document.getElementById('unordered-list');

const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
];

let breed = [];

fetch('https://dog.ceo/api/breeds/list')
    .then((res) => res.json())
    .then((res) => {
        return (breed = res.message), populateHtml();
    })
    .catch((err) => console.log(err));

// Traverse through the alphabet and create each initial list container
const populateHtml = () => {
    for (let j = 0; j < alphabet.length; j++) {
        const columnList = document.createElement('ul');
        columnList.className = 'container-breed_list';
        unorderedList.appendChild(columnList);

        const initialLetter = document.createElement('p');
        initialLetter.innerText = `${alphabet[j].charAt(0).toUpperCase()}:`;
        initialLetter.id = `${alphabet[j]}`;
        initialLetter.className = 'breed-initial';

        columnList.appendChild(initialLetter);

        const breedContainer = document.createElement('div');
        breedContainer.className = 'container-list';
        columnList.appendChild(breedContainer);

        // Filter each breed with the current letter of the alphabet
        for (let i = 0; i < breed.length; i++) {
            const breedListItem = document.createElement('li');

            const breedLink = document.createElement('a');
            breedLink.className = 'breed-link';

            if (breed[i].charAt(0) === alphabet[j]) {
                breedLink.href = `./dogView.html?dogbreed=${breed[i]}`;
                breedListItem.innerText =
                    breed[i].charAt(0).toUpperCase() + breed[i].slice(1);
                breedListItem.className = 'breed-link__text';

                breedContainer
                    .appendChild(breedLink)
                    .appendChild(breedListItem);
            }
        }

        // Handle if there is no breed with the current letter
        if (initialLetter.nextSibling.childNodes.length === 0) {
            const noBreedFound = document.createElement('p');
            noBreedFound.innerText = `There are no breeds of dogs with the initial ${alphabet[
                j
            ].toUpperCase()}
                 `;
            noBreedFound.className = 'no-breed-found';
            initialLetter.nextSibling.appendChild(noBreedFound);
        }
    }
};
