function findTheOldest (people) {
    
    oldestPerson = null;
    maxAge = -Infinity;

    for (var person of people) {
        var age = person.yearOfDeath - person.yearOfBirth;

        if (age > maxAge) {
            maxAge = age;
            oldestPerson = person;
        }
    }

    return oldestPerson;
}

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ];

console.log(findTheOldest(people));