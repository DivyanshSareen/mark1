const readlineSync = require("readline-sync");

var questions = [
    {
        "question" : "where do i live?",
        "answer" : "Delhi"
    },
    {
        "question" : "what is my age?",
        "answer" : "21"
    },
    {
        "question" : "what is my favourite anime?",
        "answer" : "cannot be determined" 
        // trick question
    }
];

var hish_scores = [
    {
        "name" : "Divyansh",
        "score" : 3
    },
    {
        "name" : "Imaginary_friend", // always there for me btw 
        "score" : 2 
    },
];

var score = 0;
var name = "";

function welcome(){
    name = readlineSync.question("whats ur name?\n");
    console.log("waddup",name);
}
function ask_ques(card, curr_score)
{
    let res = readlineSync.question(card.question+" ");
    if(res.toLowerCase() === card.answer.toLowerCase())
    {
        console.log("\n+1 (¬‿¬)\n");
        curr_score += 1;
    }
    else{
        console.log("\nno, the answer is", card.answer, "(ㆆ_ㆆ)\n");
    }
    return curr_score;
}
function game(){
    for( let i = 0; i < questions.length; i += 1)
    {
        score = ask_ques(questions[i], score);
    }
}
function show_score()
{
    console.log("your score is", score);
}
welcome();
game();
show_score();