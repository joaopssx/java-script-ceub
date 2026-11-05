console.log("Hello, World!");

// List of students and their grades
const students = [
  { name: "Ana", grades: [8, 7.5, 9] },
  { name: "Bruno", grades: [5, 6, 4.5] },
  { name: "Carla", grades: [3, 4, 2] },
];

// Adds up the grades and divides by the count
function calculateAverage(grades) {
  let sum = 0;

  for (let i = 0; i < grades.length; i++) {
    sum = sum + grades[i];
  }

  return sum / grades.length;
}

// Decides the student's status based on the average
function checkStatus(average) {
  if (average >= 7) {
    return "Passed";
  } else if (average >= 5) {
    return "Retake";
  } else {
    return "Failed";
  }
}

// Goes through the students and shows each result
for (const student of students) {
  const average = calculateAverage(student.grades);
  const status = checkStatus(average);

  console.log(student.name + " - average " + average.toFixed(1) + " - " + status);
}
