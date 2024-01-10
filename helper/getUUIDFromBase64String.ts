export function getUUIDFromBase64String(base64String: string){
    const decodedString = atob(base64String);
    const json = JSON.parse(decodedString);
    const stringUrl = json.textures.SKIN.url;
    const uuid = stringUrl.split("/")[4];
    return uuid
} 