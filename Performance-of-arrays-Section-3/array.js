let instructor = {
  firstName: "Kelly",
  isInstructor: true,
  favoriteNumbers: [1, 2, 3, 4],
};

Object.keys(instructor);
Object.entries(instructor);
instructor.hasOwnProperty("firstName");

// Object.keys(instructor) = O(n)
// Object.entries(instructor) = O(n)
// instructor.hasOwnProperty("firstName") = O(1)

let names = ["Michael", "Melissa", "Andrea"];
