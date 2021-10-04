let favNumber = 18
let api = "http://numbersapi.com/"

//Fact about my Favorite Number
async function favNum() {
let res = await axios.get(`${api}${favNumber}?json`)
    console.log(res.data)
}
favNum()

//Facts about multiple Numbers
let num = [3, 6, 9]

async function favNums() {
    let res = await axios.get(`${api}${num}?json`)
    console.log(res.data)
}

favNums()

//4 Facts about Favorite Number

async function fourFacts() {
    const promises = []
    for (let i = 1; i < 5; i++) {
        promises.push($.getJSON(`${api}${favNumber}?json`))

    }

    let res = await Promise.all(promises)
    res.forEach(data => {
        $('#results').append(`<p>${data.text}</p>`)
    })
}

fourFacts()