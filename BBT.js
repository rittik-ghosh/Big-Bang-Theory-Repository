const chalk = require('chalk');
var readlineSync = require('readline-sync');

var score = 0;
var name = readlineSync.question(chalk.yellow.bold("Hi there! What is your name??"));
console.log("\n");
console.log(chalk.greenBright.bold("Wecome "+chalk.blueBright.bold(name)+" to The BBT QUIZ?"+"\n"));
// High Score Part
var highscore =
  {
    name:"rittik",
    score:5
  }
;
function highs(score,hscore){
  if(score>hscore){
    console.log(chalk.red.bold("Congratulations "+name+" you have made a new high score of "+score+"\n"));
  }
  return 0;
}
// question printing function
function play (question, answer,option){
  var ans = readlineSync.keyInSelect(option,question);
  if(option[ans].toUpperCase()===answer.toUpperCase()){
      console.log(chalk.yellowBright("\n"+"You have choosen "+chalk.redBright.bold.underline(option[ans])+" and you are right!!!"));
      score++;
  }
  else{
      console.log(chalk.redBright.bold("\n"+"Sorry you missed!!!"));
  }
  console.log(chalk.yellowBright.bold("\n"+"Your current score is: "+chalk.redBright.bold(score)));
  console.log(chalk.blueBright.bold("\n"+"----------------------------"+"\n"));
  return 0;
};
/// QUESTION & ANSWER PART
var questionOne ={
  question :"What does Sheldon's mom call him?",
  answer:"Shelly",
  option:["Sheldon","Pumkin","Shelly","MoonPie"]
};
var questionTwo ={
  question :"What breed of dog does Raj have?",
  answer: "Yorkshire Terrier",
  option:["Crocker Spaniel","Golden Retriver","Maltese","Yorkshire Terrier"]
};
var questionThree ={
  question :"Who is the only member of the cast to hold a PhD in real life?",
  answer: "Mayim Bialik",
  option:[ "Johnny Galecki","Jim Parsons","Kaley Cuoco" ,"Mayim Bialik"]
};

var questionFour ={
  question :"What astronaut nickname was Howard given by his space friends?",
  answer: "Froot Loops",
  option:["Rocket Man","Froot Loops","Howie","Big Guy"]
};

var questionFive ={
  question :"Who plays Sheldon's older brother, Georgie?",
  answer: "Jerry O'Connell",
  option:["Adom Nimoy","Jack McBrayer","Jerry O Connell","Wil Weaton"]
};

var questionSix ={
  question :"Where did Amy get her undergraduate degree?",
  answer: "Harvard",
  option:["Harvard","Stanford","M.I.T","Yale"]
};


//array of questions
var questions = [questionOne,questionTwo,questionThree,questionFour,questionFive,questionSix];

for(var i=0;i<questions.length;i++){
  var currentques= questions[i];
  play(currentques.question,currentques.answer,currentques.option);
};

console.log(chalk.cyanBright.bold("Hi "+chalk.redBright.bold.underline(name)+" your final score is: "+ chalk.redBright.bold.underline(score)+" and the highscore is "+highscore.score));

highs(score,highscore.score);
