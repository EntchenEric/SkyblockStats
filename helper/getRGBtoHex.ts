// Convert RGB to HEX and this is my example RGB 255:255:255

export const getRGBtoHex = (rgb: string): string => {
  const [r, g, b] = rgb.split(':').map((x) => parseInt(x));
  const hex = (x: string) => {
    const hex = parseInt(x).toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  };

  return `#${hex(r.toString())}${hex(g.toString())}${hex(b.toString())}`;
};
