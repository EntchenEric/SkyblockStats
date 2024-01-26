export function getBookTypeFromEnchantedBookLore(lore: string) {
    //extract romean numerals from lore e.g. "VII" from "Sharpness VII"
    const romanNumerals = lore.match(/[IVX]+/g);
    if (!romanNumerals) return "enchanted_book";
    //convert roman numerals to number
    const bookLevel = romanNumerals.map((romanNumeral) => {
        const romanNumeralToNumber: any = {
            I: 1,
            II: 2,
            III: 3,
            IV: 4,
            V: 5,
            VI: 6,
            VII: 7,
            VIII: 8,
            IX: 9,
            X: 10,
        };
        return romanNumeralToNumber[romanNumeral];
    });

    //get enchanted Book name without roman numeral
    const bookName = lore.replace(/[IVX]+/, "").trim().toLowerCase();
    //get book type from book name
    const bookType = bookName.split(" ").slice(-1)[0];
    return bookType + bookLevel;
}