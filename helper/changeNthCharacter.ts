export function changeNthCharacter(inputString: string, n: number, newChar: string) {
  // Check if the index is within the bounds of the string
  if (n >= 0 && n < inputString.length) {
    // Create a new string with the changed character
    return inputString.substring(0, n) + newChar + inputString.substring(n + 1);
  } else {
    // If the index is out of bounds, return the original string
    return inputString;
  }
}