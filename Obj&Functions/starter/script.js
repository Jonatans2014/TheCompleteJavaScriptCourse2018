

//FUnction constructor


/*
var Person = function (name,yearOfBirth,job) {

    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

//Prototype property is used a Inheritance
Person.prototype.calculateAge = function()
{
    console.log(2018 - this.yearOfBirth);
}

Person.prototype.lastName = 'SMith';
var john = new Person('john', 1993, 'teacher');
var jane = new Person('Jane', 1969, 'teacher');
var Jonatans = new Person('Jonatans',1993,'Full-Stack Developer');

jane.calculateAge();
john.calculateAge();
Jonatans.calculateAge();


console.log(john.name,john.lastName);
console.log(jane.lastName);
console.log(Jonatans.lastName);

*/

/*
//Object.Create

var personProto = {
    calculateAge: function () {

        console.log(2016-this.yearOfBirth);
    }


};
//inheritance/ prototype
var john = Object.create(personProto);
john.name = 'John';
john.yearOfBIrth = 1998;
john.job = 'teacher';


var jane = Object.create(personProto, {

    name: {value: 'jane'},
    yearOfBirth: { value: 1969},
    job: {value: 'designer'}

});



// Lecture Primitives vs objects

var a = 23;
var b= a;
a =46;
console.log(a);
console.log(b);

var obj1 =
    {
        name: 'John',
        age: 26
    };
var obj2  = obj1;
obj1.age =30;
console.log(obj1.age);
console.log(obj2.age);


var age = 27;
var obj =
    {
        name: 'Jonas',
        city: 'Lisbon'
    };


function change(a,b)
{
    a = 30;
    b.city = 'San Francisco';

}

change(age,obj);

console.log(age);
console.log(obj.city);
console.log(obj.name);



//Passing FUnctions as arguments
var years = [1990,1965,1937,2005,1998];

function arrayCalc(arr, fn)
{
    var arrRes = [];
    for(var i=0; i < arr.length; i++)
    {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;

}


function calculateAge(el)
{
    return 2016 - el;
}

function isFullAge(el)
{
    return el >= 18;
}

function maxHeartRate(el) {
    if(el >= 18 && el <= 81)
    {
        return Math.round(206.9 -(0.67*el));
    }else
    {
        return -1;
    }

}



var ages = arrayCalc(years,calculateAge);
var fullAges = arrayCalc(ages,isFullAge);
var rates = arrayCalc(ages,maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);

*/

//Lecture Functions returning functions

function interviewQuestion(job) {
    if (job === 'designer') {
        return function (name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    }
    else if (job === 'teacher') {
        return function (name) {

            console.log('What subject do you teach, ' + name + '?');
        }
    }else {
        return function (name) {
            console.log('Hello' +name + ', what do you do?');

        }
    }

}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');


teacherQuestion('John');
designerQuestion('John');

interviewQuestion('teacher')('Mark');



//Lecture IIFE FUNCTION to keep data private and create new scope hidden from outside scope
/*
function game(){
    var score = Math.random() * 18;
    console.log(score >=5);
}
game();
*/


/* An Inner function has always access to the variables and parameters of its outer
function, even after the outer function*/



(function (goodLuck) {
    var score = Math.random() *10;
    console.log(score >=5 - goodLuck);
})(5);

//lecture closures
function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function (yearOfBirth) {
        var age = 2018 - yearOfBirth;
        console.log((retirementAge- age) + a);
    }
}

var  retirementUS = retirement(66);

//return function above
console.log(retirementUS);


var  retirementDeutch = retirement(65);
var  retirementIceland = retirement(67);



//retirementUS(1990);
//retirementDeutch(1993);
//retirementIceland(1990);

//retirement(1990);
//retirement(66)(1998);





function interviewQuestion(job) {
    return function(name)
    {
        if(job === 'designer')
        {
            console.log(name + ', can you please explain what UX design is?');

        }else if (job === 'teacher')
        {
            console.log('What subject do you teach, ' + name + '?');

        }else
        {
            console.log('Hello' +name + ', what do you do?');
        }


    }
}

interviewQuestion('teacher')('John');



// Lecture Method Borrowing BInd, Call, Apply

var john =
    {
        name: 'John',
        Age: 26,
        job: 'Teacher',
        presentation: function (style, timeOfDay) {
                if(style === 'formal')
                {
                        console.log('Good'+
                        timeOfDay + ', Ladies and gentlemen! I\m '+
                        this.name +', I\m a ' +
                        this.job + ' and I\m '+
                        this.age + 'years old.');
                }else if(style === 'friendly')
                {
                    console.log('Hey! What\s, I am '+
                    this.name+
                    ', I\m a '+ this.job+
                    ' and I\m'+this.age+
                    'Years old. Have a nice '+
                    timeOfDay + '.');
                }

        }
    }


var emily =
    {
        name: 'Emily',
        age: 35,
        job: 'designer'
    };

john.presentation('formal','morning');




john.presentation.call(emily, 'friendly','afternoon');

//apply method accepts an argument as an array

//Bind returns a function and allow to  preset some arguments
// This is a technique called carrying, carrying is a technique in which we create
//a function based on another function but with some preset parameters so exactly what
// we did here. Bind is extremelly useful for that.
/*
var johnFriendly =
    john.presentation.bind(john,'friendly');


johnFriendly('morning');
johnFriendly('night');


var emilyFormal =
    john.presentation.bind(emily,'formal');
emilyFormal('afternoon');




var years = [1990,1965,1937,2005,1998];

function arrayCalc(arr, fn)
{
    var arrRes = [];
    for(var i=0; i < arr.length; i++)
    {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;

}


function calculateAge(el)
{
    return 2016 - el;
}

function isFullAge(limit,el)
{
    return el >= limit;
}




var ages = arrayCalc(years,calculateAge);
// ok now, what will be passed into arrayCalc function is not simply going to be
//The FullAge function but a copy of the isFull function with 20
//as the preset argument for the limit
var fullJapan = arrayCalc(ages,isFullAge.bind(this,20));

console.log(ages);
console.log(fullJapan);
*/



/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/



//So make sure that all your code is private and doesn't interfere with the other programmers code.
// use IFFEE to give it privacy so it does not interfere with other's code and it cannot be overriden
//we are going to use an immediately invoked function expression
//This create a new scope in which we define all of these code  and at the end the function is executed
// if someone creates a variable called question o any variable witht the same var name within iFFE
// it will not be interfered.

/*
(function (){

    function Question(question,answers,correct)
    {
        this.question = question;
        this.answers = answers;
        this.correct =correct;
    }


//Prototype is the same as Inheritance in Java
    Question.prototype.displayQuestion =
        function () {
            console.log(this.question);


            for(var i =0; i< this.answers.length;  i++)
            {
                console.log(i + ': '+this.answers[i]);

            }
        }


    Question.prototype.checkAnswer =
        function (ans) {
            if(ans === this.correct)
            {
                console.log('Correct answer!');
            }else{

                console.log('Wrong answer. do try again. :');
            }
        }

//Question
    var q1 = new Question('Is JavaScript the coolest programming language in the world?',
        ['Yes','No'],
        0);
    var q2 = new Question('What is the name of this course\'s teacher?',
        ['John',
            'Michael',
            'Jonas'],
        2);

    var q3 = new Question('What does best describe coding?\'s teacher?',
        ['Boring',
            'Hard',
            'Fun',
            'Tedious'],
        2);


    var questions = [q1,q2,q3];
    var n = Math.floor(Math.random()*
        questions.length);

    questions[n].displayQuestion();

    var answer = parseInt(prompt('Please select the correct answer.'));
    questions[n].checkAnswer(answer);



})();

*/




/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/


(function (){

    function Question(question,answers,correct)
    {
        this.question = question;
        this.answers = answers;
        this.correct =correct;
    }


//Prototype is the same as Inheritance in Java
    Question.prototype.displayQuestion =
        function () {
            console.log(this.question);


            for(var i =0; i< this.answers.length;  i++)
            {
                console.log(i + ': '+this.answers[i]);

            }
        }


    Question.prototype.checkAnswer =
        function (ans, callback) {
            var sc;

            if(ans === this.correct)
            {
                console.log('Correct answer!');
                sc = callback(true);
            }else{

                console.log('Wrong answer. do try again. :');
                sc = callback(false);
            }

            this.displayScore(sc);
        }


      Question.prototype.displayScore = function (score)
      {
          console.log('your current score is ' + score);
          console.log('----------------------------------------------------');

      }

//Question
    var q1 = new Question('Is JavaScript the coolest programming language in the world?',
        ['Yes','No'],
        0);
    var q2 = new Question('What is the name of this course\'s teacher?',
        ['John',
            'Michael',
            'Jonas'],
        2);

    var q3 = new Question('What does best describe coding?\'s teacher?',
        ['Boring',
            'Hard',
            'Fun',
            'Tedious'],
        2);


    var questions = [q1,q2,q3];

    function score()
    {
        var sc =0;

        return function (correct ) {
            if(correct)
            {
                sc++;
            }
            return sc;
        }

    }

    var keeepScore = score();


    function nextQuestion() {


        var n = Math.floor(Math.random()*
            questions.length);

        questions[n].displayQuestion();

        var answer = prompt('Please select the correct answer.');

        if(answer !== 'exit')
        {
            questions[n].checkAnswer(parseInt(answer),keeepScore);
            nextQuestion();
        }

    }

    nextQuestion();

})();