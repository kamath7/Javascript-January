const puppeteer = require('puppeteer');

(async function createPdfDoc(){
    const browser = await puppeteer.launch({headless:true})
    const page = await browser.newPage()
    try {
        await page.goto('https://www.thehindubusinessline.com/news/international-driving-permits-can-now-be-extended-abroadroad-ministry/article33542091.ece',{waitUntil:'networkidle0'})
        const pdf = await page.pdf({path:'./lallepd.pdf',format:'A4'});
        await browser.close()
        return pdf;
    } catch (error) {
        console.log(error);
    }
   
})();