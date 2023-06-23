import React from 'react';
import ReactDOM from 'react-dom';
import { Grid } from '@giphy/react-components';
import { GiphyFetch } from '@giphy/js-fetch-api';


const gf = new GiphyFetch('UCJxF5HIGQZ5NPACd5nUW1nHiV0rymUd');

function generateMeme() {
  const topText = document.getElementById('topText').value;
  const bottomText = document.getElementById('bottomText').value;

  gf.random({ tag: 'meme' }).then(({ data }) => {
    const selectedImage = data.images.downsized.url;

    const memeContainer = document.getElementById('memeContainer');
    memeContainer.innerHTML = `
      <img src="${selectedImage}" alt="Meme Image">
      <div class="topText">${topText}</div>
      <div class="bottomText">${bottomText}</div>
    `;
  });
}

// Add event listener to the generate button
const generateButton = document.getElementById('generateButton');
generateButton.addEventListener('click', generateMeme);



