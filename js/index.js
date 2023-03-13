class CardData {
    constructor(url) {
        this.url = url
        this.options = {
            method: 'GET'
        }
    }

    getData() {
        let req = fetch(this.url, this.options)

        req.then(response => response.json())
            .then(responseData => {
                const cardInfo = (createMarkUp(responseData.results))
                createCard(cardInfo)
                // searchByAlphabet(cardInfo)
            })
            .catch(error => console.error(error))
    }
}

function createMarkUp(data) {
    return data.filter(value => value)
}


function createCard(cards) {
    const character = cards.map((card) => {
        return `<a href="#" class="character">
                    <img class="character__image" src="${card.image}" alt="API image" width="200" height="200">
                    <div class="character__name">${card.name}</div>
                    <div class="character__species">${card.species}</div>
                </a>`
        }
    )
    const row = document.querySelector('.main__characters__row')
    row.innerHTML = character.join(' ')
}

const characterData = new CardData('https://rickandmortyapi.com/api/character')
characterData.getData()