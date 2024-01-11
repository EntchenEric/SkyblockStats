import { getSkullFromSkin } from './getSkullFromSkin';
import { getUUIDFromBase64String } from './getUUIDFromBase64String';

export async function getItemTexture(id: string, skin: string | undefined = undefined) {
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
      console.log(data);
      return data.url;
    } else {
      return getSkullFromSkin(getUUIDFromBase64String(skin));
    }
  } else {
    const response = await fetch('api/getItemTexture', {
      method: 'POST',
      body: JSON.stringify({ material: id }),
    });
    const data = await response.json();
    console.log(data);
    return data.url;
  }
}
