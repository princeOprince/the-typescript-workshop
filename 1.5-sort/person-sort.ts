interface Person {
  firstName: string;
  lastName: string;
}

// Count variable to detect the total number of calls
// of the getfullName function
let count = 0;

function getFullName(person: Person) {
  count++;
  return `${person.firstName} ${person.lastName}`;
}

const programmers: Person[] = [
  { firstName: 'Donald', lastName: 'Knuth' },
  { firstName: 'Barbara', lastName: 'Liskow' },
  { firstName: 'Lars', lastName: 'Bak' },
  { firstName: 'Guido', lastName: 'Van Rossum' },
  { firstName: 'Anders', lastName: 'Hejslberg' },
  { firstName: 'Edsger', lastName: 'Dijkstra' },
  { firstName: 'Brandon', lastName: 'Eich' }
];

// A naive and straightforward sorting function
function naiveSortPersons(persons: Person[]): Person[] {
  return persons.sort((first, second) => {
    const firstFullName = getFullName(first);
    const secondFullName = getFullName(second);
    return firstFullName.localeCompare(secondFullName);
  })
}

// Schwartzian transform
function schwartzSortPersons(persons: Person[]) : Person[] {

  // use the array's map function to transform each element into a tuple
  const tuples: [Person, string][] = 
    persons.map(person => [person, getFullName(person)]);
 
  // sort the array of tuples using the standard sort method
  tuples.sort((first, second) => first[1].localeCompare(second[1]));

  // transfrom the sorted array of tuples to an array of person objects
  const result = tuples.map(tuple => tuple[0]);

  return result;
}

// Call naiveSortPersons
count = 0;
const sortedNaive = naiveSortPersons(programmers);
console.log(sortedNaive);
console.log(`When called using the naive approach, the function was called ${count} times`);

// Call schwartzSortPersons
count = 0;
const sortedSchwartz = schwartzSortPersons(programmers);
console.log(sortedSchwartz);
console.log(`When called using the Schwartzian transform approach,
the function was called ${count} times`);
