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

const createHtmlElement = (el, text, classname) => {
    const newElement = document.createElement(el);
    newElement.innerText = text;
    newElement.className = classname;
    return newElement;
};

// Traverse through the alphabet and create each initial list container
const populateHtml = () => {
    for (let j = 0; j < alphabet.length; j++) {
        const columnList = createHtmlElement('ul', '', 'container-breed_list');
        unorderedList.appendChild(columnList);

        const initialLetter = createHtmlElement(
            'p',
            `${alphabet[j].charAt(0).toUpperCase()}:`,
            'breed-initial'
        );
        initialLetter.id = `${alphabet[j]}`;
        columnList.appendChild(initialLetter);

        const breedContainer = createHtmlElement('div', '', 'container-list');
        columnList.appendChild(breedContainer);

        // Filter each breed with the current letter of the alphabet
        for (let i = 0; i < breed.length; i++) {
            const breedListItem = createHtmlElement('li');
            const breedLink = createHtmlElement('a', '', 'breed-link');

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
            const noBreedFound = createHtmlElement(
                'p',
                `There are no breeds of dogs with the initial ${alphabet[
                    j
                ].toUpperCase()}
                 `,
                'no-breed-found'
            );
            initialLetter.nextSibling.appendChild(noBreedFound);
        }
    }
};
