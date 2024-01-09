const pako = require('pako');
const nbt = require('prismarine-nbt');

export function decodeSkyblockData(encodedString: string) {
  try {
    // Decode the Base64 string
    const decodedString = atob(encodedString);

    let dataString = decodedString;
    let buffer = new Buffer(dataString, 'binary');

    // Create a new inflator
    const inflator = new pako.Inflate();

    // Feed the inflator with the data
    inflator.push(buffer, false);

    // Get the inflated data
    let inflatedData = inflator.result;

    // Check if the inflated data is valid
    if (!inflatedData || inflatedData.length === 0) {
      throw new Error('Inflated data is empty');
    }

    // Convert the inflated data to a Buffer
    const nbtBuffer = Buffer.from(inflatedData, 'binary');

    // Parse the NBT data synchronously
    const nbtData = nbt.parse(nbtBuffer);

    return nbtData;
  } catch (error) {
    console.error("Error decoding, inflating, or parsing:", error);
    return null;
  }
}
