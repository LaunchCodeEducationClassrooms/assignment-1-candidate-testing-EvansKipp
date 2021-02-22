const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //
// TODO 1.1a: Define candidateName // 
let candidateName="";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question="Who was the first American woman in space? ";
let correctAnswer="Sally Ride";
let candidateAnswer="";
let questions=["Who was the first American woman in space?","True or false: 5000 meters = 5 kilometers","Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?","What is the minimum crew size for the ISS?"];
let correctAnswers=["Sally Ride","True","40","Trajectory","3"]
let candidateAnswers=[];


function askForName() {
  question = input.question("What is your name?: ");
  // TODO 1.1b: Ask for candidate's name //
  candidateName=question;
}


function askQuestion() {
  for (let i=0;i<questions.length;i++){
  question=input.question(questions[i]);
  console.log("Correct Answer:"+"\t"+ correctAnswers[i]);
  console.log("Your Answer:"+"\t"+question);
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  candidateAnswers.push(question);

  }
}

lowestScore=0
highestScore=5

function gradeQuiz(candidateAnswers) {
  if (candidateAnswers[0]===correctAnswers[0])
  lowestScore+=1

if (candidateAnswers[1]===correctAnswers[1])
  lowestScore+=1

if (candidateAnswers[2]===correctAnswers[2])
  lowestScore+=1

if (candidateAnswers[3]===correctAnswers[3])
  lowestScore+=1

  if (candidateAnswers[4]===correctAnswers[4])
  lowestScore+=1
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 


  let grade=lowestScore/highestScore*100;
  console.log("Your Grade is"+"\t"+grade+"%");



if (grade>=85){
console.log("Your Passed,Excellent");
}
else {
  console.log("Failed");
}
  return grade;
}


function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("How are you" +"\t"+candidateName)
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}


// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};