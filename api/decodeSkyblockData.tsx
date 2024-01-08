const pako = require('pako');
const { NBTReader } = require('nbt-js');

export function decodeSkyblockData(encodedString: string) {
  try {
    // Decode the Base64 string
    const decodedString = atob(encodedString);

    // Convert the decoded string to a Uint8Array
    const decodedData = new Uint8Array(decodedString.length);
    for (let i = 0; i < decodedString.length; ++i) {
      decodedData[i] = decodedString.charCodeAt(i);
    }

    // Unzip the data using pako
    const inflatedData = pako.inflate(decodedData, { to: 'string' });

    // Parse the inflated NBT string using nbt-js
    const reader = new NBTReader(inflatedData);
    const parsedObject = reader.read();

    return parsedObject;
  } catch (error) {
    console.error("Error decoding, inflating, or parsing:", error);
    return null;
  }

}
