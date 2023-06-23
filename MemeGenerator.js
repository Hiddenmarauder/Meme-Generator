import React, { useState, useEffect } from 'react';
import { Grid } from '@giphy/react-components';
import { GiphyFetch } from '@giphy/js-fetch-api';

function MemeGenerator() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    const fetchGifs = async () => {
      const gf = new GiphyFetch('UCJxF5HIGQZ5NPACd5nUW1nHiV0rymUd'); // Replace 'YOUR_GIPHY_API_KEY' with your actual Giphy API key
      const { data } = await gf.trending({ limit: 10 });
      setSelectedImage(data[Math.floor(Math.random() * data.length)].images.downsized_medium.url);
    };

    fetchGifs();
  }, []);

  const handleTopTextChange = (event) => {
    setTopText(event.target.value);
  };

  const handleBottomTextChange = (event) => {
    setBottomText(event.target.value);
  };

  const handleGenerateMeme = () => {
    // This section of code is updated to use React's DOM manipulation instead of direct DOM manipulation
    // Create JSX elements instead of using document.createElement

    const memeContainer = document.getElementById('memeContainer');

    const memeImage = <img src={selectedImage} alt="Meme Image" />;

    const topTextElement = <div className="topText">{topText}</div>;

    const bottomTextElement = <div className="bottomText">{bottomText}</div>;

    ReactDOM.render(
      <div>
        {memeImage}
        {topTextElement}
        {bottomTextElement}
      </div>,
      memeContainer
    );
  };

  return (
    <div>
      <div className="form-group">
        <label htmlFor="topText">Top Text:</label>
        <input type="text" id="topText" value={topText} onChange={handleTopTextChange} className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="bottomText">Bottom Text:</label>
        <input
          type="text"
          id="bottomText"
          value={bottomText}
          onChange={handleBottomTextChange}
          className="form-control"
        />
      </div>
      <Grid width={800} columns={3} fetchGifs={GiphyFetch('YOUR_GIPHY_API_KEY').trending} />
      <button onClick={handleGenerateMeme} className="btn btn-primary">
        Generate Meme
      </button>
      <div id="memeContainer"></div>
    </div>
  );
}

export default MemeGenerator;


