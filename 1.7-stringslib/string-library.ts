
function toTitleCase(sentence: string): string {
  // Get all the words
  const words: string[] = sentence.split(' ');

  // Separate the first letter from the remaining letters in each word
  let firstletters = [], remletters = [];
  words.forEach(word => {
    firstletters.push(word[0].toUpperCase());
    remletters.push(word.substring(1).toLowerCase());
  });

  // Join the first letter with the remaining letters in each word
  let joined = joinArrs(firstletters, remletters);

  return joined.join(' ');
}

function toTitleCase2(sentence: string): string {
  // Get all the words
  const words: string[] = sentence.split(' ');
  const joined = [];

  // Separate the first letter from the remaining letters in each word
  words.forEach(word => {
    const firstletter = word[0].toUpperCase();
    const remletters = word.substring(1).toLowerCase();

    // Join the first letter with the remaining letters in each word
    joined.push(`${firstletter}${remletters}`);
  });

  return joined.join(' ');
}

function toTitleCase3(input: string): string {
  // split the string into an array on every occurrence of
  // the space character
  const words = input.split(" ");
  const titleWords = [];
  // loop through each word
  for (const word of words) {
    // take the first character using `slice` and convert it to uppercase
    const initial = word.slice(0, 1).toLocaleUpperCase();
    // take the rest of the character using `slice` and convert them to lowercase
    const rest = word.slice(1).toLocaleLowerCase();
    // join the initial and the rest and add them to the resulting array
    titleWords.push(`${initial}${rest}`);
    // join all the processed words
    const result = titleWords.join(" ");
    return result;
  }
}

function joinArrs(first: string[], second: string[]): string[] {
  let joined = [];
  for (let i = 0; i < first.length; i++) {
    joined.push(first[i] + second[i]);
  }
  return joined;
}

function countWords(words: string): number {
  return words.split(/[-_ ]/).length;
}

function toWords(words: string): string[] {
  return words.split(/[-_ ]/);
}

function repeat(word: string, numTimes: number): string {
  return Array(numTimes).fill(word).join('');
}

function isAlpha(words: string): boolean {
  return words.match(/[^a-z]*/i) ? false : true;
}

function isAlpha2(input: string): boolean {
  // regex that will match any string that only has upper and lowercase letter
  // the character group [a-z] will check for a single character
  // the star quantifier (*) will tell the regular expression to check for all the characters
  // the i modifier will tell the regular expression to make the match case-insensitive
  const alphaRegex = /^[a-z]*$/i;
  // test our input using the regex
  const result = alphaRegex.test(input);
  return result;
}

function isBlank(words: string): boolean {
  return words.match(/[^ ]/) ? false : true;
}

function isBlank2(input: string): boolean {
  // test if the first character of our input is an empty space
  while (input[0] === " ") {
    // successively slice off the first character of the input
    input = input.slice(1);
  }
  // the loop will stop on the first character that is not a space
  // if we're left with an empty string, we only have spaces in the input
  const result = input === "";
  return result;
}




  let dash = "-----------";
  console.log();

  // toTitleCase test
  console.log('toTitleCase("war AND peace")');
  console.log(dash, toTitleCase("war AND peace"));
  console.log('toTitleCase2("Catcher in the Rye")');
  console.log(dash, toTitleCase2("Catcher in the Rye"));
  console.log('toTitleCase3("tO kILL A mOCKINGBIRD")');
  console.log(dash, toTitleCase3("tO kILL A mOCKINGBIRD"));

  console.log();

  // countWords test
  console.log("countWords('War and Peace')");
  console.log(dash, countWords('War and Peace'));
  console.log("countWords('catcher-in-the-rye')");
  console.log(dash, countWords('catcher-in-the-rye'));
  console.log("countWords('for_whom the-bell-tolls')");
  console.log(dash, countWords('for_whom the-bell-tolls'));

  console.log();

  // toWords test
  console.log(toWords('War and Peace'));
  console.log(toWords('catcher-in-the-rye'));
  console.log(toWords('for_whom the-bell-tolls'));

  console.log();

  // repeat test
  console.log(repeat('War', 3));
  console.log(repeat('rye', 1));
  console.log(repeat('bell', 0));

  console.log();

  // isAlpha test
  console.log("isAlpha('War and Peace')");
  console.log(dash, isAlpha('War and Peace'));
  console.log("isAlpha2('Atonement')");
  console.log(dash, isAlpha2('Atonement'));
  console.log("isAlpha2('1Q84')");
  console.log(dash, isAlpha2('1Q84'));
  console.log("isAlpha('')");
  console.log(dash, isAlpha(''));

  console.log();

  // isBlank test
  console.log("isBlank('War and Peace')");
  console.log(dash, isBlank('War and Peace'));
  console.log("isBlank2('War and Peace')");
  console.log(dash, isBlank2('War and Peace'));
  console.log("isBlank('          ')");
  console.log(dash, isBlank('          '));
  console.log("isBlank('')");
  console.log(dash, isBlank(''));
  console.log("isBlank2('   War')");
  console.log(dash, isBlank('   War'));

  console.log();






