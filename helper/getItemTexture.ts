import { getSkullFromSkin } from './getSkullFromSkin';
import { getUUIDFromBase64String } from './getUUIDFromBase64String';

export function getItemTexture(id: string, skin: string, color: string) {
  if (skin) {
    return fetch('api/checkSkyFurfItemTexture', {
      method: 'POST',
      body: JSON.stringify({ material: id }),
    })
      .then((response) => response.json())
      .then((data) => {
        const skyfurfAlternativeExists = data.existing;
        if (skyfurfAlternativeExists) {
          return fetch('api/getItemTexture', {
            method: 'POST',
            body: JSON.stringify({ material: id }),
          })
            .then((response) => response.json())
            .then((data) => data.url);
        } else {
          return getSkullFromSkin(getUUIDFromBase64String(skin));
        }
      });
  } else {
    if (id.toLowerCase() === 'velvet_top_hat') {
      console.log('I FOUND A VELVET TOP HAT with color: ', color);
      const itemIDs = ['velvet_top_hat', 'velvet_top_hat_2'];
      return fetch('api/getItemTexture', {
        method: 'POST',
        body: JSON.stringify({ materials: itemIDs }),
      })
        .then((response) => response.json())
        .then((data) => {
          const coloredTopHat = fetch('http://localhost:5005/colorizeItem', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              texture: data[0].url,
              color: color ? color : '#ff0000',
            }),
          });
          return coloredTopHat;
        })
        .then((coloredTopHat) => coloredTopHat.json())
        .then(async (coloredTopHatData) => {
          const layer2 = await fetch('/api/getItemTexture', {
            method: 'POST',
            body: JSON.stringify({ material: 'velvet_top_hat_2' }),
          });
          const data = await layer2.json();
          const topHatImages = [coloredTopHatData.data, data.url];
          return fetch('http://localhost:5005/combineImages', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              Images: topHatImages,
            }),
          });
        })
        .then((combinedTopHat) => combinedTopHat.json())
        .then((combinedTopHatData) => 'data:image/png;base64,' + combinedTopHatData.data);
    }

    return fetch('api/getItemTexture', {
      method: 'POST',
      body: JSON.stringify({ material: id }),
    })
      .then((response) => response.json())
      .then((data) => data.url);
  }
}
