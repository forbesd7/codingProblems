const str = "cat";
const arr2 = "basa";

const isUnique = str => {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) return false;
    }
  }
  return true;
};

console.log(isUnique(str));
console.log(isUnique(arr2));
