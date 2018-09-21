

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
                    'Years old. Have a nice'+
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

var johnFriendly =
    john.presentation.bind(john,'friendly');


johnFriendly('morning');



