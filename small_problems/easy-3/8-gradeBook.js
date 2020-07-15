//function that determines avg of 3 scores passed to it. Returns letter associated with that grade
//sum all scores, divide by 3

function getGrade(score1, score2, score3) {
  let avg = (score1 + score2 + score3) / 3;
  if (avg >= 90 && avg <= 100) {
    return "A";
  }
  else if (avg >= 80 && avg < 90) {
    return "B";
  }
  else if (avg >= 70 && avg < 80) {
    return "C";
  }
  else if (avg >= 60 && avg < 70) {
    return "D";
  }
  else {
    return "F";
  }
}


console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"