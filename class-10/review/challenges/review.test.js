/* ------------------------------------------------------------------------------------------------
You have created a game application and begin by asking users an easy question: In which month is Halloween?
Write a function named matchMonth which uses a regular expression pattern to match any of these inputs: October, Oct, october, oct
If the user enters any of these four inputs, return true. For any other input, return false.
Do not use the vertical bar (pipe) in your pattern.
------------------------------------------------------------------------------------------------ */

const matchMonth = (input) => {
  // Solution code here...
  return input.toString().match(/^[Oo]ct(ober)?$/);
};

describe('Testing challenge 4', () => {
  test('It should match any of the acceptable inputs', () => {
    expect(matchMonth('Oct')).toBeTruthy();
    expect(matchMonth('oct')).toBeTruthy();
    expect(matchMonth('October')).toBeTruthy();
    expect(matchMonth('october')).toBeTruthy();
  });

  test('It should not match anything other than the acceptable inputs', () => {
    expect(matchMonth('November')).toBeFalsy();
    expect(matchMonth('nov')).toBeFalsy();
    expect(matchMonth(123)).toBeFalsy();
    expect(matchMonth('octob')).toBeFalsy();
    expect(matchMonth('OCTOBER')).toBeFalsy();
    expect(matchMonth('notOctober')).toBeFalsy();
  });
});

/* ------------------------------------------------------------------------------------------------

Write a function named findShells that takes in the string below and uses a regular expression pattern to find all instances of the following words: "sells", "shells", "seashells".
Do not use the vertical bar(pipe) character.
Hint: All of these words end with the letters "ells".
------------------------------------------------------------------------------------------------ */

const seashells = 'She sells seashells by the seashore. The shells she sells are surely seashells. So if she sells shells on the seashore, I\'m sure she sells seashore shells.';

const findShells = (str) => {
  // Solution code here...
};

describe('Testing challenge 7', () => {
  test('It should return an array of instances of "sells", shells", and "seashells"', () => {
    expect(findShells(seashells)).toStrictEqual(['sells', 'seashells', 'shells', 'sells', 'seashells', 'sells', 'shells', 'sells', 'shells']);
    expect(findShells(seashells).length).toStrictEqual(9);
  });
});

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4
Write a function named countNumberOfChildren that, given the array of characters, below, uses reduce to return the total number of children in the data set.
------------------------------------------------------------------------------------------------ */

const characters = [
  {
    name: 'Eddard',
    spouse: 'Catelyn',
    children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
    house: 'Stark',
  },
  {
    name: 'Jon',
    spouse: 'Lysa',
    children: ['Robin'],
    house: 'Arryn',
  },
  {
    name: 'Cersei',
    spouse: 'Robert',
    children: ['Joffrey', 'Myrcella', 'Tommen'],
    house: 'Lannister',
  },
  {
    name: 'Daenarys',
    spouse: 'Khal Drogo',
    children: ['Drogon', 'Rhaegal', 'Viserion'],
    house: 'Targaryen',
  },
  {
    name: 'Mace',
    spouse: 'Alerie',
    children: ['Margaery', 'Loras'],
    house: 'Tyrell',
  },
  {
    name: 'Sansa',
    spouse: 'Tyrion',
    house: 'Stark',
  },
  {
    name: 'Jon',
    spouse: null,
    house: 'Snow',
  },
];

const countNumberOfChildren = (arr) => {
  // Solution code here...
  return arr.reduce((acc, value) => {
    return value.children
      ? acc += value.children.length
      : acc
  }, 0);
};

describe('Testing challenge 5', () => {
  test('It should return the total number of children', () => {
    expect(countNumberOfChildren(characters)).toStrictEqual(14);
  });
});