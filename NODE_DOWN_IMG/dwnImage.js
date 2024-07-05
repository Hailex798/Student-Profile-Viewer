import axios from 'axios';
import fs from 'fs-extra';
import path from 'path';

// Define the base URL and roll number range
const baseUrl = 'https://erp.psit.ac.in/assets/img/Simages/';
const startRollNo = 31173;
const endRollNo = 31900;
const outputDir = './images';
const concurrencyLimit = 10;  // Limit the number of concurrent downloads

// Define a function to download an image from a given URL
const downloadImage = async (url, filepath) => {
  try {
    const response = await axios.get(url, { responseType: 'stream' });
    response.data.pipe(fs.createWriteStream(filepath));
    return new Promise((resolve, reject) => {
      response.data.on('end', () => resolve());
      response.data.on('error', (err) => reject(err));
    });
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.log(`Image not found for URL: ${url}`);
    } else {
      console.error(`Error downloading ${url}: ${error.message}`);
    }
  }
};

// Define a function to download images within the specified roll number range with concurrency control
const downloadImages = async () => {
  await fs.ensureDir(outputDir);
  const tasks = [];
  for (let rollNo = startRollNo; rollNo < endRollNo; rollNo++) {
    const imageUrl = `${baseUrl}${rollNo}.jpg`;
    const filepath = path.join(outputDir, `${rollNo}.jpg`);
    tasks.push(() => downloadImage(imageUrl, filepath));

    // Process tasks in batches to limit concurrency
    if (tasks.length >= concurrencyLimit) {
      await Promise.all(tasks.map(task => task()));
      tasks.length = 0;  // Clear tasks array
    }
  }
  // Process any remaining tasks
  if (tasks.length > 0) {
    await Promise.all(tasks.map(task => task()));
  }
};

// Run the downloadImages function and handle any errors
downloadImages().then(() => {
  console.log('Download completed!');
}).catch((error) => {
  console.error(`Failed to download images: ${error.message}`);
});
