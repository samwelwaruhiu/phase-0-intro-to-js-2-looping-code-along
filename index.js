// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function writeCards(stringName, eventName){
    let thankYou = []
    for(let i = 0; i < stringName.length; i++){
        thankYou.push(`Thank you, ${stringName[i]}, for the wonderful ${eventName} gift!`)
    }
    return thankYou;
}
function countDown( startingNumber ) {
    while ( startingNumber > 0 ) {
      console.log( startingNumber );
      startingNumber -= 1;
    }
    console.log( startingNumber );
}