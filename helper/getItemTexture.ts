import { getSkullFromSkin } from './getSkullFromSkin';
import { getUUIDFromBase64String } from './getUUIDFromBase64String';

export async function getItemTexture(
  id: string,
  skin: string | undefined = undefined,
  color: string | undefined = undefined
) {
  //   //console.log(id);
  if (skin) {
    const response = await fetch('api/checkSkyFurfItemTexture', {
      method: 'POST',
      body: JSON.stringify({ material: id }),
    });
    const data = await response.json();
    const skyfurfAlternativeExists = data.existing;
    if (skyfurfAlternativeExists) {
      const response = await fetch('api/getItemTexture', {
        method: 'POST',
        body: JSON.stringify({ material: id }),
      });
      const data = await response.json();
      //   //console.log(data);
      return data.url;
    } else {
      return getSkullFromSkin(getUUIDFromBase64String(skin));
    }
  } else {
    if (id.toLocaleLowerCase() === 'velvet_top_hat') {
      console.log('I FOUND A VELVET TOP HAT with color: ', color);
      const itemIDs = ['velvet_top_hat', 'velvet_top_hat_2'];
      const response = await fetch('api/getItemTexture', {
        method: 'POST',
        body: JSON.stringify({ materials: itemIDs }),
      });
      const data = await response.json();
      //console.log('FETCHING NOW');
      const coloredTopHat = await fetch('http://localhost:5005/colorizeItem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          texture: data[0].url,
          color: color ? color : '#ff0000',
        }),
      });
      //console.log('Fetch finished');
      const coloredTopHatData = await coloredTopHat.json();
      //   //console.log(coloredTopHatData);
      const topHatImages = [coloredTopHatData.data, data[1].url];
      //   //console.log(topHatImages);
      const combinedTopHat = await fetch('http://localhost:5005/combineImages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Images: topHatImages,
        }),
      });
      const combinedTopHatData = await combinedTopHat.json();
      //console.log(combinedTopHatData);
      return 'data:image/png;base64,' + combinedTopHatData.data;
    }
    const response = await fetch('api/getItemTexture', {
      method: 'POST',
      body: JSON.stringify({ material: id }),
    });
    const data = await response.json();
    ////console.log(data);
    return data.url;
  }
}
