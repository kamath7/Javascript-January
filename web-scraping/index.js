const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

(()=>{
    axios.get('https://www.goodreads.com/quotes').then((response)=>{
        const $ = cheerio.load(response.data);
        const quotes = [];
        $('.quoteText').each(function(i,elm){
            quotes.push($(this).text());
        })
      
        return quotes;

    }).then((quotes)=>{
        const file = fs.createWriteStream('quotes.txt');
        quotes.forEach(element => {
            file.write(element+'\n')
        });
        file.end();
    })
})();

// async function fetchHtml(url){
//     const {data} = await axios.get(url)
//     return cheerio.load(data)
// }

// const $ = await fetchHtml('https://www.goodreads.com/quotes')
// console.log('HTML'+$.html())