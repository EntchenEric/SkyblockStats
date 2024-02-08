export function formatNumberAbbreviated(number: number) {
    if(!number) return 0;
    const suffixes = ["", "k", "m", "b", "t"]; // Add more as needed
  
    let suffixIndex = 0;
  
    while (number >= 1000 && suffixIndex < suffixes.length - 1) {
      number /= 1000;
      suffixIndex++;
    }
  
    // Adjust the number of decimal places based on your preferences
    const formattedNumber = number.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: number < 10 ? 2 : 1,
    });
  
    return formattedNumber + suffixes[suffixIndex];
  }
  