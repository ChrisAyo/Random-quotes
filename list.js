// refer to dom
const quoteButton = document.getElementById('a')

const para = document.getElementById('quotes')



// Brake quotes into 3 sections

const fragments = [
    ['Potatoes and chochlate', 'For beautiful eyes,', 'Oh,', 'Never let', 'Life becomes easier', 'The true meaning of life'],
    ['biusciuts anyhow', 'look for the good in others;', 'for beautiful lips,', 'speak only words of kindness;', 'the things you can find', 'is to plant trees,'],
    ['this is it?', 'and for poise.', 'if you don’t stay behind', 'under whose shade you do not expect to sit', 'the apology you never got']

]

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))


}

fragments[0][getRandomInt(fragments[0].length)]

fragments[1][getRandomInt(fragments[1].length)]

fragments[2][getRandomInt(fragments[2].length)]

const first = fragments[0][getRandomInt(fragments[0].length)]

const second = fragments[1][getRandomInt(fragments[1].length)]
const third = fragments[2][getRandomInt(fragments[2].length)]



const start = document.createElement('p')
const middle = document.createElement('p')
const end = document.createElement('p')


start.innerText = first
middle.innerText = second
end.innerText = third



const randomQoute = first + second + third

function quoteGenerator(fragments) {

    let quote = ''

    fragments.forEach(element => {
        // console.log(element[getRandomInt(element.length)])

        quote += ' ' + element[getRandomInt(element.length)]



    });


    return quote.trimLeft()

    console.log(quote.trimLeft())

}

console.log(randomQoute)



// Function of quotes generator 

quoteButton.addEventListener('click', function () {

    const quote = document.createElement('p')
    quote.innerText = quoteGenerator(fragments)

    const quoteContainer = document.getElementById('quotes')

    quoteContainer.appendChild(quote)

    // create if statment that puts first third section of paragraph into start, second third into middle and rest into end 




})

