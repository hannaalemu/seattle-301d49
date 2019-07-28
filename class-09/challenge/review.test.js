/* ------------------------------------------------------------------------------------------------
Write a function that accepts an object and an integer as arguments and adds a new property to the object called yearBorn.The value of the yearBorn property should be the integer that was passed in.
The change should be reflected in the source object that was passed in to the function.That is, the function should modify the object 'in place'.
Do not use a return statement.
For example:
const octavia = { fullName: 'Octavia Estelle Butler' };
addBirthYearProperty(octavia, 1947);
console.log(a) prints { fullName: 'Octavia Estelle Butler', yearBorn: 1947 }
------------------------------------------------------------------------------------------------ */

const addBirthYearProperty = (obj, year) => {
  // Solution code here...
};

describe('Testing challenge 3', () => {
  test('It should add a property to an object', () => {
    const a = { fullName: 'Octavia Butler' };
    addBirthYearProperty(a, 1947);

    expect(a.yearBorn).toStrictEqual(1947);
  });
});

/* ------------------------------------------------------------------------------------------------
Write a function named sortMeetingsByDay that takes in an array of objects, each of which represents a meeting happening a particular day of the week, with a particular start time and end time.
Sort the meetings by the day on which they happen, Monday-Friday. It does not matter which order meetings come in on a particular day. For example, if there are two meetings on Monday, it does not matter which comes first.
------------------------------------------------------------------------------------------------ */

function Meeting(dayOfWeek, start, end) {
  this.dayOfWeek = dayOfWeek;
  this.start = start;
  this.end = end;
}
const meetings = [
  new Meeting('Monday', '0900', '1000'),
  new Meeting('Wednesday', '1300', '1500'),
  new Meeting('Tuesday', '1145', '1315'),
  new Meeting('Wednesday', '0930', '1000'),
  new Meeting('Monday', '0900', '0945'),
  new Meeting('Friday', '1200', '1345'),
];

const sortMeetingsByDay = (arr) => {
  // Solution code here...
  const dayValues = {
    "Monday": 1,
    "Tuesday": 2,
    "Wednesday": 3,
    "Thursday": 4,
    "Friday": 5,
  }

  return arr.sort((a, b) => {
    if (dayValues[a.dayOfWeek] > dayValues[b.dayOfWeek]) {
      return 1;
    } else if (dayValues[a.dayOfWeek] < dayValues[b.dayOfWeek]) {
      return -1;
    } else {
      if ((parseInt(a.end) - parseInt(a.start)) < (parseInt(b.end) - parseInt(b.start))) {
        return -1;
      } else if ((parseInt(a.end) - parseInt(a.start)) > (parseInt(b.end) - parseInt(b.start))) {
        return 1;
      }
      return 0;
    }
  });
};

describe('Testing challenge 9', () => {
  test('It should sort meetings by the day on which they happen', () => {
    const sortedMeetings = sortMeetingsByDay(meetings);
    console.log(sortedMeetings);
    expect(sortedMeetings.slice(0, 2)).toEqual(expect.arrayContaining([new Meeting('Monday', '0900', '0945'), new Meeting('Monday', '0900', '1000')]));
    expect(sortedMeetings[2]).toStrictEqual(new Meeting('Tuesday', '1145', '1315'));
    expect(sortedMeetings.slice(3, 5)).toEqual(expect.arrayContaining([new Meeting('Wednesday', '0930', '1000'), new Meeting('Wednesday', '1300', '1500')]));
    expect(sortedMeetings[5]).toStrictEqual(new Meeting('Friday', '1200', '1345'));
  });
});

/* ------------------------------------------------------------------------------------------------
Use the snorlaxStats data, below, for this challenge.
Write a function named extractStats that, given an array of stats, uses map to return an array of objects containing the stat name and the total.
The total should be the sum of the effort and the baseStat.
Here is an example of a single array element: { name: 'speed', total: 35 }
------------------------------------------------------------------------------------------------ */

const snorlaxStats = {
  stats: [
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/6/',
        name: 'speed',
      },
      effort: 5,
      baseStat: 30,
    },
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/5/',
        name: 'special-defense',
      },
      effort: 2,
      baseStat: 110,
    },
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/4/',
        name: 'special-attack',
      },
      effort: 9,
      baseStat: 65,
    },
  ],
  name: 'snorlax',
  weight: 4600,
};

const extractStats = (arr) => {
  // Solution code here...
};

describe('Testing challenge 7', () => {
  test('It should return an array containing objects with name and total values', () => {
    expect(extractStats(snorlaxStats.stats)).toStrictEqual([
      { name: 'speed', total: 35, },
      { name: 'special-defense', total: 112, },
      { name: 'special-attack', total: 74, },
    ]);
    expect(extractStats(snorlaxStats.stats).length).toStrictEqual(3);
  });
});
