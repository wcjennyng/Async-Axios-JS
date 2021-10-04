let api = 'https://deckofcardsapi.com/api/deck'

//Draw a card

async function draw() {
    let res = await axios.get(`${api}/new/draw`)
    value = res.data.cards[0].value
    suit = res.data.cards[0].suit
    console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`)
}

draw()

//Draw 2 cards from the same deck

async function twoCards() {
    let res1 = await axios.get(`${api}/new/draw`)
    value1 = res1.data.cards[0].value
    suit1 = res1.data.cards[0].suit
    deckId = res1.data.deck_id

    let res2 = await axios.get(`${api}/${deckId}/draw`)
    value2 = res2.data.cards[0].value
    suit2 = res2.data.cards[0].suit
    console.log(`${value1.toLowerCase()} of ${suit1.toLowerCase()}, ${value2.toLowerCase()} of ${suit2.toLowerCase()}`)

}

twoCards()

//Draws a pile of cards from the deck with a button
async function cardDeck() {
    let res = await axios.get(`${api}/new/shuffle`)
    deckId = res.deck_id

    $('#card-btn').on('click', async function () {
        let card = await axios.get(`${api}/${deckId}/draw`)
        cardImg = card.data.cards[0].image
        $('#card-results').append(`<img class='card-img' src="${cardImg}"></img>`
        )
        if (res.remaining === 0) $('#card-btn').remove()
    })

}

cardDeck()