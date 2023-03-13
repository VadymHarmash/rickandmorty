// function searchByAlphabet(cards) {
//     const searchInput = document.getElementById('search');
//     searchInput.addEventListener('keyup', () => {
//         const searchText = searchInput.value.toLowerCase();
//         const cardsList = cards.filter(card => card).map(card => card.name.toLowerCase());

//         const filteredcards = cardsList.filter(cardText => cardText.includes(searchText));
//         createSearchItem(filteredcards)

//         cards.forEach((index) => {
//             if (filteredcards.includes(cardsList[index])) {
//                 createSearchItem(cards, searchInput)
//             } else {
//                 return
//             }
//         });
//     });
// }

// function createSearchItem(cards, input){
//     const item = cards.map((card) => {
//         return `<div class="search-item">
//                     ${card.name}
//                 </div>`
//         }
//     )
//     const searchItemsField = document.getElementById('search-items-field')
//     searchItemsField.innerHTML = item.join(' ')
//     if(input){
//         searchItemsField.style.display = 'block'
//     } else {
//         searchItemsField.style.display = 'none'
//     }
// }

// function searchByAlphabet(cards) {
//     const searchInput = document.getElementById('search');

//     searchInput.addEventListener('input', (ev) => {
//         const value = ev.target.value.trim()

//         const searchRegExp = new RegExp(value, 'gi')

//         if (value === '') {
//             cards.forEach((el) => {
//                 el.classList.remove('hide')
//             })
//             return
//         }

//         cards.forEach((el) => {
//             const innerCard = el.querySelector('.card2')
//             const elementText = innerCard.textContent
//             const isContainsSearchRequest = searchRegExp.test(elementText)
//             if (!isContainsSearchRequest) {
//                 el.classList.add('hide')
//             } else {
//                 el.classList.remove('hide')
//             }
//         })
//     })
// }
