export function toUpperCaseFirstLetter(title: string) {
    let firstLetter = title.charAt(0);
    let firstLetterCap = firstLetter.toUpperCase();
    let remainingLetters = title.slice(1);
    let capitalizedWord = firstLetterCap + remainingLetters
    return capitalizedWord;
}