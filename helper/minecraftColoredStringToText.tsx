import React from "react";

export function minecraftColoredStringToText(text: string) {
  const colorCodes: any = {
    "0": "#000000",
    "1": "#0000AA",
    "2": "#00AA00",
    "3": "#00AAAA",
    "4": "#AA0000",
    "5": "#AA00AA",
    "6": "#FFAA00",
    "7": "#AAAAAA",
    "8": "#555555",
    "9": "#5555FF",
    "a": "#55FF55",
    "b": "#55FFFF",
    "c": "#FF5555",
    "d": "#FF55FF",
    "e": "#FFFF55",
    "f": "FFFFFF",
    "k": "000000",
    "l": "bold",
    "m": "strikethrough",
    "n": "underline",
    "o": "italic",
    "r": "reset",
  };

  const texts = text.split("§");
  texts.shift();

  if (texts.length === 0) return <span>{text}</span>;

  let result: React.ReactNode = null;

  texts.forEach((text, index) => {
    const color = colorCodes[text[0]];
    const bold = text[0] === "l";
    const strikethrough = text[0] === "m";
    const underline = text[0] === "n";
    const italic = text[0] === "o";
    const reset = text[0] === "r";
    const textWithoutCurrentText = text.slice(1);
    const currentText = (
      <span
        key={index}
        style={{
          color: color != null ? color : "#ffffff",
          fontWeight: bold ? 700 : 500,
          textDecoration: strikethrough ? "line-through" : "",
          fontStyle: italic ? "italic" : "",
        }}
      >
        {textWithoutCurrentText.includes('ZEILENUMBRUCH')
          ? (textWithoutCurrentText.split('ZEILENUMBRUCH').map((text, index) => {
            return (
              <React.Fragment key={index}>
                {text}
                <div style={{ lineHeight: '1px' }}><br /></div> {/* Adjust the lineHeight value as needed */}
              </React.Fragment>
            );
          })) : textWithoutCurrentText
        }
      </span>
    );

    if (result === null) {
      result = currentText;
    } else {
      result = (
        <>
          {result}
          {currentText}
        </>
      );
    }
  });

  return result;
}
