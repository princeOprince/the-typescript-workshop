# Schwartzian Transform

### Using Arrays and Tuples to create an efficient sort of Objects

This snippet involves the use of the above transform to sort and print a predefined array of programmers. Each programmer object will be an instance of a Person interface.

The programmers will be sorted based on their full name using a getFullName function.

The process is as follows:

* Use the array map method to transform the programmers into a tuple of [Person, string] type where the first element is the actual programmer and the second element is the full name string.
* Use the sort method of the array to sort the tuples, using the second element of each tuple.
* Use the map method again to transform the tuples back to an array of programmers by taking the first element and discarding the second element
