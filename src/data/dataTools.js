const provincieData = require("./Provincie Mock Data.json");
const assignmentName = "Opdracht of Project";
const aantalMeldingen = "Aangifte of melding doen";
const aantalGezocht = "Gezocht & Vermist";
const provinceName = "Provincie";

const assignments = provincieData
  .map((item) => item[assignmentName])
  .filter((value, index, self) => self.indexOf(value) === index);

function averageBy(arr, id, ratingType) {
  const { total, count } = arr.reduce(
    (a, b) => {
      if (b[assignmentName] === id) {
        a.total += b[ratingType];
        a.count++;
      }
      return a;
    },
    { total: 0, count: 0 }
  );
  return total / count;
}

const createAverageRatings = () => {
  let newArray = [];
  assignments.forEach((assignment) => {
    let assignmentAverage = {
      [provinceName]: "Nord-Holland",
      [assignmentName]: assignment,
      [aantalMeldingen]: averageBy(provincieData, assignment, aantalMeldingen),
      [aantalGezocht]: averageBy(provincieData, assignment, aantalGezocht),
    };
    newArray.push(assignmentAverage);
  });
  return newArray;
};

const averageRatingsArray = createAverageRatings();
const provincieAssignmentData = averageRatingsArray.concat(provincieData);
const provincieUnsorted = provincieAssignmentData

  .map((item) => item["Provincie"])
  .filter((value, index, self) => self.indexOf(value) === index);

const provincieSorted = provincieUnsorted.sort();

export { provincieAssignmentData, provincieSorted };
