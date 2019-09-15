

// quote generator button 
const quoteGeneratorButton = document.getElementById('display')

// quotes broken into three sections arrarys - 1-3 start middle end
const quoteFragments1 = [
    ['Potatoes and chochlate', 'For beautiful eyes,', 'Oh,', 'Never let', 'Life becomes easier', 'The true meaning of life'],
    ['biusciuts anyhow', 'look for the good in others;', 'for beautiful lips,', 'speak only words of kindness;', 'the things you can find', 'is to plant trees,'],
    ['this is it?', 'and for poise.', 'if you don’t stay behind', 'under whose shade you do not expect to sit', 'the apology you never got']

]

const quoteFragments2 = [
    ['Your limitation—it’s', 'Push yourself,', 'Sometimes later', 'Great things', 'Dream it.', 'Success doesn’t just find you.',
        'The harder you work for something,', 'Don’t stop', 'Wake up with determination.', 'Do something today', 'It’s going to be hard,', 'Sometimes we’re tested',
    ],
    ['only your', 'because no one else is', 'becomes never.', 'never come from', 'Wish it.',
        'You have to go out', 'the greater you’ll feel', 'when you’re tired.', 'Go to bed with',
        'that your future self', 'but hard does not', 'not to show our weaknesses,',
    ],
    [
        'imagination', 'going to do it for you.', 'Do it now.', 'comfort zones.', 'Do it.',
        'and get it.', 'when you achieve it.', 'Stop when you’re done.', 'satisfaction.', 'will thank you for.',
        'mean impossible.', 'but to discover our strengths.',
    ]


]

// function to produce random number

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
}



// random quote generator button

function quoteGenerator(fragments) {
    let quote = ''
    fragments.forEach(element => {
        // console.log(element[getRandomInt(element.length)])
        quote += ' ' + element[getRandomInt(element.length)]
    });

    return quote.trimLeft()
}

function quoteSelector(quoteFragments1) {


    const quote = document.createElement('p')
    quote.innerText = quoteGenerator(quoteFragments1)

    const quoteContainer = document.getElementById('quotes')

    quoteContainer.appendChild(quote)


}



quoteGeneratorButton.addEventListener('click', function () {


    const quoteContainer = document.getElementById('quotes')

    quoteContainer.innerHTML = ''

    let ship = document.getElementsByName('ship');
    let one = document.getElementsByName('one')


    let quoteType
    for (let i = 0; i < ship.length; i++) {
        if (ship[i].checked) {
            quoteType = ship[i].value



        }

    }

    quoteType = quoteType === 'quoteFragments1' ? quoteFragments1 : quoteFragments2

    for (i = 0; i < one.length; i++) {
        if (one[i].checked) {
            let x = i;
            while (x >= 0) {
                quoteSelector(quoteType);
                x--

            }


        }

    }

})



