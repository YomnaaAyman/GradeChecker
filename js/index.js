function letterGrade(score) {
  let result = "";
  if (score == 100) {
    result = "Perfect Score";
  } else if (score < 100 && score >= 85) {
    result = "You Got A";
  } else if (score < 85 && score >= 75) {
    result = "You Got B";
  } else if (score < 75 && score >= 65) {
    result = "You Got C";
  } else if (score < 65 && score >= 50) {
    result = "You Got D";
  } else if (score < 50 && score >= 0) {
    result = "You Got F";
  } else {
    result = "Not A Number";
  }
  return result;
}

document.getElementById("submitBtn").addEventListener("click", function () {
  const scoreInput = document.getElementById("score").value;
  const score = parseInt(scoreInput);
  const grade = letterGrade(score);
  document.getElementById("finalresult").innerText = grade;
});
