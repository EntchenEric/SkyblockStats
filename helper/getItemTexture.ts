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
    // Save the item ids that need to be implemented here
    const itemIDs: { [key: string]: string[] } = {
      velvet_top_hat: ['velvet_top_hat', 'velvet_top_hat_2'],
      cashmere_jacket: ['cashmere_jacket', 'cashmere_jacket_2'],
      satin_trousers: ['satin_trousers', 'satin_trousers_2'],
      oxford_shoes: ['oxford_shoes', 'oxford_shoes_2'],
    };
    let idlower = id.toLowerCase();
    if (itemIDs.hasOwnProperty(idlower)) {
      // console.log(`I FOUND A ${idlower} with color: ${color}`);
      // console.log(itemIDs[idlower][0]);
      return fetch('api/getItemTexture', {
        method: 'POST',
        body: JSON.stringify({ material: itemIDs[idlower][0] }),
      })
        .then((response) => response.json())
        .then((data) => {
          const coloredSeymourArmorPiece = fetch('http://localhost:5005/colorizeItem', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              texture: data.url,
              color: color ? color : '#ff0000',
            }),
          });
          return coloredSeymourArmorPiece;
        })
        .then((coloredSeymourArmorPiece) => coloredSeymourArmorPiece.json())
        .then(async (coloredSeymourArmorPiece) => {
          const layer2 = await fetch('/api/getItemTexture', {
            method: 'POST',
            body: JSON.stringify({ material: itemIDs[idlower][1] }),
          });
          const data = await layer2.json();
          const armorImages = [coloredSeymourArmorPiece.data, data.url];
          return fetch('http://localhost:5005/combineImages', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              Images: armorImages,
            }),
          });
        })
        .then((combinedSeymourArmor) => combinedSeymourArmor.json())
        .then((combinedSeymourArmor) => 'data:image/png;base64,' + combinedSeymourArmor.data);
    }

    return fetch('api/getItemTexture', {
      method: 'POST',
      body: JSON.stringify({ material: id }),
    })
      .then((response) => response.json())
      .then((data) => data.url);
  }
}
