const quote=require('./index.js');

var Quote = quote.getQuote();
if(!Quote.hasOwnProperty('text'))throw new Error("Quote does not have \'text\' key");
if(!Quote.hasOwnProperty('author'))throw new Error("Quote does not have \'author\' key");

try{
    require('./data/data.json')
}catch(e){
    throw new Error("Incorrect JSON");
}
/* getQuote() returns an object containing 'text' and 'author' */

console.log('\n***********************************');
console.log('***********************************\n\n');

console.log('RANDOM QUOTE - GET INSPIRED\n');

console.log(Quote.text);
console.log('- '+Quote.author);

console.log('\n\n***********************************');
console.log('***********************************\n\n');
