const characterData = new Data('https://rickandmortyapi.com/api/character')
characterData.getData()
const episodeData = new Data('https://rickandmortyapi.com/api/episode')
episodeData.getData()
const locationData = new Data('https://rickandmortyapi.com/api/location')
locationData.getData()

class Character {
    constructor(img, name, race) {
        this.img = img
        this.name = name
        this.race = race
    }

    createCharacter() {
        const card = document.createElement('div')
        card.classList.add('character')
        const characterImg = document.createElement('img')
        characterImg.src = this.img

        const characterName = document.createElement('div')
        characterName.classList.add('character__name')
        characterName.append(this.name)

        const characterRace = document.createElement('div')
        characterRace.classList.add('character__race')
        characterRace.append(this.race)

        const row = document.querySelector('.main__characters__row')
        card.append(characterImg, characterName, characterRace)
        row.append(card)
    }
}

const rick = new Character('./img/rick.png', 'Rick Sanchez', 'Human')
rick.createCharacter()
const rick1 = new Character('./img/rick.png', 'Rick Sanchez2', 'Human')
rick1.createCharacter()
const rick2 = new Character('./img/rick.png', 'Rick Sanchez3', 'Human')
rick2.createCharacter()
const rick3 = new Character('./img/rick.png', 'Rick Sanchez4', 'Human')
rick3.createCharacter()
const rick4 = new Character('./img/rick.png', 'Rick Sanchez5', 'Human')
rick4.createCharacter()
const rick5 = new Character('./img/rick.png', 'Rick Sanchez6', 'Human')
rick5.createCharacter()
const rick6 = new Character('./img/rick.png', 'Rick Sanchez7', 'Human')
rick6.createCharacter()
const rick7 = new Character('./img/rick.png', 'Rick Sanchez8', 'Human')
rick7.createCharacter()
const rick8 = new Character('./img/rick.png', 'Rick Sanchez9', 'Human')
rick8.createCharacter()
