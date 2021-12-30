var question_list = [
    "How many continents are there?",              //pehla question
    "What is the capital of India?",            //doosra question
    "NG mei kaun se course padhaya jaata hai?"    // teesra question
]
let options_list = [
    //pehle question ke liye options
    ["Four", "Nine", "Seven", "Eight"],
    //second question ke liye options
    ["Chandigarh", "Bhopal", "Chennai", "Delhi"],
    //third question ke liye options
    ["Software Engineering", "Counseling", "Tourism", "Agriculture"]
]
// har ek question ke liye, uski solution key (yeh index nahi hai)
var solution_list = [3, 4, 1] 
var answer_list=[
    ["(1)four","(3)seven"],
    ["(4)Delhi","(2)Bhopal"],
    ["(4)Agricultue","(1)Software Engineering"]
]
console.log("KON BANEGA COROREPATI***")
var i=0;
var s=0;
var count=0;
while(i<question_list.length){
    console.log(question_list)
    var a=0;
    var b=i;
    while(a<options_list[i].length){
        var k=options_list[b][a]
        console.log(a+1,k)
        a=a+1
    }const r=require("readline-sync")
    var lifeline=r.question("you want life line :")
    if (lifeline=="yes"){
        console.log("50 50 life line ")
        if (count==0){
            console.log(answer_list[b])
            var answer1=r.questionInt("enter your answer1")
            if (answer1==solution_list[i]){
                s=s+10000
                console.log("Your answer is correct")
                console.log("you won Rs/",s)
            }else{
                console.log("your anser is wrong ")
                console.log("you won zero")
            }count++;
        }   break;
}
}