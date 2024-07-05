const request = require("request");

function downloadImage(url, destination) {
  request(url)
    .pipe(require("fs").createWriteStream(destination))

    .on("close", () => {
      console.log("Image downloaded successfully!");
    })

    .on("error", (err) => {
      console.error("Error downloading the image:", err);
    });
}

export default downloadImage;