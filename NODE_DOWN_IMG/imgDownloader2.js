for(let i=31276 ; i<=31280 ; i++){
    const downloadImage = require('./imgDownloader').default;
    const imgUrl = `https://erp.psit.ac.in/assets/img/Simages/${i}.jpg`;
    const destination = `./images/${i}.jpg`;
    downloadImage(imgUrl, destination)
}