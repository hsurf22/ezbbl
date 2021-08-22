import axios from 'axios';

const audioAssetsURL = 'http://localhost/AudioAssets/index.json';

function getAudioAssets() {
  axios.get(audioAssetsURL).then((resp) => {
    //console.log(resp.data);
    localStorage.setItem('audioAssets', JSON.stringify(resp));
    console.log('-------FETCHED-------');
  });
}

export { getAudioAssets };
