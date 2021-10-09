// Count variable to detect the total number of calls
// of the getfullName function
var count = 0;
function getFullName(person) {
    count++;
    return person.firstName + " " + person.lastName;
}
var programmers = [
    { firstName: 'Donald', lastName: 'Knuth' },
    { firstName: 'Barbara', lastName: 'Liskow' },
    { firstName: 'Lars', lastName: 'Bak' },
    { firstName: 'Guido', lastName: 'Van Rossum' },
    { firstName: 'Anders', lastName: 'Hejslberg' },
    { firstName: 'Edsger', lastName: 'Dijkstra' },
    { firstName: 'Brandon', lastName: 'Eich' }
];
// A naive and straightforward sorting function
function naiveSortPersons(persons) {
    return persons.sort(function (first, second) {
        var firstFullName = getFullName(first);
        var secondFullName = getFullName(second);
        return firstFullName.localeCompare(secondFullName);
    });
}
// Schwartzian transform
function schwartzSortPersons(persons) {
    // use the array's map function to transform each element into a tuple
    var tuples = persons.map(function (person) { return [person, getFullName(person)]; });
    // sort the array of tuples using the standard sort method
    tuples.sort(function (first, second) { return first[1].localeCompare(second[1]); });
    // transfrom the sorted array of tuples to an array of person objects
    var result = tuples.map(function (tuple) { return tuple[0]; });
    return result;
}
// Call naiveSortPersons
count = 0;
var sortedNaive = naiveSortPersons(programmers);
console.log(sortedNaive);
console.log("When called using the naive approach, the function was called " + count + " times");
// Call schwartzSortPersons
count = 0;
var sortedSchwartz = schwartzSortPersons(programmers);
console.log(sortedSchwartz);
console.log("When called using the Schwartzian transform approach,\nthe function was called " + count + " times");
