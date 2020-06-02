// Code your solutions in this file
function writeCards(names) {
    let thankYouArray = []
    for (let index = 0; index < names.length; index++) {
        thankYouArray.push(`Thank you, ${names[index]}, for the wonderful surprise gift!`)
    }
    return thankYouArray
}

function countDown(number) {
    for (let index = 0; index <= number; index++) {
        console.log(number - index)
    }
}