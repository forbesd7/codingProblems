function toCamelCase(str) {
  let camelCasedWord;
  if (str.length === 0) {
    return "";
  } else if (str.includes("-")) {
    const newStrArr = str.split("-");
    camelCasedWord = newStrArr[0];
    for (let i = 1; i < newStrArr.length; i++) {
      let x = newStrArr[i][0].toUpperCase();
      let restOfWord = newStrArr[i].slice(1);
      let finalWord = x + restOfWord;
      camelCasedWord += finalWord;
    }
  } else if (str.includes("_")) {
    const newStrArr = str.split("_");
    camelCasedWord = newStrArr[0];
    for (let i = 1; i < newStrArr.length; i++) {
      let x = newStrArr[i][0].toUpperCase();
      let restOfWord = newStrArr[i].slice(1);
      let finalWord = x + restOfWord;
      camelCasedWord += finalWord;
    }
    console.log(camelCasedWord);
  }
  return camelCasedWord;
}
console.log(toCamelCase("the_stealth_warrior"));
