const quizData = [
    {
        question: '1. Who invented the JavaScript and in what year',
        a: 'Brendan Eich in 1997',
        b: 'Brendan Rich in 1995',
        c: 'Bredan Eich in 1995',
        d: 'Håkon Wium Lie in 1997',
        correct: 'c'
    },{
        question: '2. The JavaScript was first Developed for?',
        a: 'Netscape 1.0',
        b: 'ECMA 264 Standard',
        c: 'SQL',
        d: 'Netscape 2.0',
        correct: 'd'
    }, {
        question: '3. Which of the following is true about JavaScript',
        a: 'JavaScript Specifies the Layout of a Web page',
        b: 'JavaScript Defines the content of a webpage',
        c: 'The behaviour of a Webpage is defined by JavaScript',
        d: 'None of the above',
        correct: 'c'
    },{
        question: '4. All the following is true about JavaScript except',
        a: 'Multiple JavaScripts can be placed in a Single HTML document',
        b: 'A JavaScript function is a block of JavaScript code, that can be executed when "called" for',
        c: 'The behaviour of a Webpage is defined by JavaScript',
        d: 'JavaScript defines the Style of a Webpage',
        correct: 'd'
    },{
        question: '5. What does the "Onclick" do to a JaveScript Function?',
        a: 'Calls a JavaScript Function',
        b: 'Changes the output of an If Statement',
        c: 'Invokes a JavaScript Function',
        d: 'both A and C are correct',
        correct: 'd'
    },{
        question: '6. Another name for Invoke in JavaScript is_______',
        a: 'Call',
        b: 'OnClick',
        c: 'getElementById',
        d: 'getElementByClassname',
        correct: 'a'
    },{
        question: '7. All of the following are method of referencing Extenal JavaScript except',
        a: 'file Path',
        b: 'Cascading',
        c: 'Without and Path',
        d: 'full URL',
        correct: 'b'
    },{
        question: '8. Which of the following is used for Testing purposes in JavaScript',
        a: 'document.write()',
        b: 'getElementById',
        c: 'document.test()',
        d: 'document.Write()',
        correct: 'a'
    },{
        question: '9. We write into a browser Console Using what command',
        a: 'document.write()',
        b: 'console.log()',
        c: 'console.write()',
        d: 'windows.alert()',
        correct: 'b'
    },{
        question: '10. JavaScript Statements are composed of the following except:',
        a: 'Expression',
        b: 'values',
        c: 'operators',
        d: 'all of the above',
        correct: 'd'
    },{
        question: '11. JavaScript Syntax defines',
        a: 'fixed values',
        b: 'Variable values',
        c: 'both A and B',
        d: 'neither A nor B',
        correct: 'c'
    },{
        question: '12. Fixed Values in JavaScript are also known as_______',
        a: 'fixed Variables',
        b: 'JavaScript literals',
        c: 'variable values',
        d: 'rigid variables',
        correct: 'b'
    },{
        question: '13. Which of the following is true for JavaScript Variable',
        a: 'The var keyword was used in all JavaScript code from 1995 to 2015.',
        b: 'The let and const keywords were added to JavaScript in 2015.',
        c: 'The var keyword should only be used in code written for older browsers.',
        d: 'all of the above',
        correct: 'd'
    },{
        question: '14. JavaScript Variable is declared in which of the following ways',
        a: 'var',
        b: 'let',
        c: 'const',
        d: 'all of a,b and c',
        correct: 'd'
    },{
        question: '15. Variables declared with the var are _______',
        a: 'Global Variables',
        b: 'Localalized Variables',
        c: 'a and b',
        d: 'neither of a and b',
        correct: 'a'
    },{
        question: '16. Variables defined with the let _______',
        a: 'are global variables',
        b: 'cannot be redeclared again',
        c: 'a and b',
        d: 'neither of a and b',
        correct: 'b'
    },{
        question: '17. All the following are true except',
        a: 'Redeclaring a variable using the var keyword can impose problems.',
        b: 'Redeclaring a variable inside a block will also redeclare the variable outside the block',
        c: 'let and const have block scope.',
        d: 'none',
        correct: 'd'
    },{
        question: '18. Which of the following operators stores text _______',
        a: 'Arithmethic Operator',
        b: 'String Operator',
        c: 'Bitwise Operator',
        d: 'multiplication Operator',
        correct: 'b'
    },{
        question: '19. Let a = 3; Let x = (100 + 50)* a, will produce',
        a: '153',
        b: '450',
        c: '150a',
        d: 'none',
        correct: 'b'
    },{
        question: '20. Which of the following Arithmetic Operation describes increment',
        a: '==',
        b: '++',
        c: '--',
        d: '**',
        correct: 'b'
    },{
        question: '21. Which of the following Arithmetic Operation describes decrement',
        a: '==',
        b: '++',
        c: '--',
        d: '**',
        correct: 'c'
    },{
        question: '22. Which of the following Arithmetic Operation describes Exponentiation',
        a: '==',
        b: '++',
        c: '--',
        d: '**',
        correct: 'd'
    },{
        question: '23. Given the statement 100 + 50, what does 100 and 50 represent?',
        a: 'Operator',
        b: 'Operand',
        c: 'rational numbers',
        d: 'integers',
        correct: 'b'
    },{
        question: '24. The following are Bitwise Operators except',
        a: '&=',
        b: '==',
        c: '^=',
        d: '/=',
        correct: 'b'
    },{
        question: '25. let x = 10, then x **= 5, will print?',
        a: '50',
        b: '100000',
        c: '500',
        d: '250',
        correct: 'b'
    },{
        question: '26. How many Datatypes does JavaScript has?',
        a: '7',
        b: '8',
        c: '10',
        d: '2',
        correct: 'b'
    },{
        question: '27. let x = 10 + 4 + Lexus, will give an ouput of_________',
        a: '104Lexus',
        b: '14Lexus',
        c: 'Lexus',
        d: 'error',
        correct: 'b'
    },{
        question: '28. let x = Lexus + 10 + 4, will give an ouput of_________',
        a: 'Lexus14',
        b: 'Lexus104',
        c: '14',
        d: 'error',
        correct: 'b'
    },{
        question: '29. A block of code designed to perform a particular task is called?',
        a: 'JavaScript Blocks',
        b: 'JavaScript Functions',
        c: 'Js.node',
        d: 'none',
        correct: 'b'
    },{
        question: '30. Variables declared within a JavaScript Function is called_______',
        a: 'declared variables',
        b: 'Local variables',
        c: 'Global variables',
        d: 'none',
        correct: 'b'
    },{
        question: '31. object propertise are accessed by ________ in JavaScript',
        a: 'objectName.propetyName',
        b: 'Objectname.Propertyname',
        c: 'a and b',
        d: 'none',
        correct: 'a'
    },{
        question: '32. The "this" keyword in JavaScript refers to_______',
        a: 'an object',
        b: 'variable',
        c: 'a and b',
        d: 'none',
        correct: 'a'
    },{
        question: '33. Do not declare Strings, Numbers and Booleans as Objects because______',
        a: 'They complicate your code and slow down execution speed',
        b: 'They are not JavaScript Datatypes',
        c: 'a and b',
        d: 'none',
        correct: 'a'
    },{
        question: '34. In JavaScript, semicolons are used to Separate________',
        a: 'Executable JavaScript Statement',
        b: 'None executable JavaScript Statement',
        c: 'a and b',
        d: 'none',
        correct: 'a'
    },{
        question: '35. In JavaScript, semicolons are used to Separate________',
        a: 'Executable JavaScript Statement',
        b: 'None executable JavaScript Statement',
        c: 'a and b',
        d: 'none',
        correct: 'a'
    },{
        question: '36. All the following are true except',
        a: 'Redeclaring a variable using the var keyword can impose problems.',
        b: 'Redeclaring a variable inside a block will also redeclare the variable outside the block',
        c: 'let and const have block scope.',
        d: 'none',
        correct: 'd'
    },{
        question: '37. Fixed Values in JavaScript are also known as_______',
        a: 'fixed Variables',
        b: 'JavaScript literals',
        c: 'variable values',
        d: 'rigid variables',
        correct: 'b'
    },{
        question: '38. Function expressions will execute automatically if the expression is followed by ______.',
        a: '==',
        b: '()',
        c: '%%',
        d: '*',
        correct: 'b'
    },{
        question: '39. The arguments.length property returns __________ when a function is invoked',
        a: 'the number of arguments received',
        b: 'a function',
        c: 'a and b',
        d: 'none',
        correct: 'a'
    },{
        question: '40. console.log() can be used to________',
        a: 'display JavaScript values in the debugger',
        b: 'to print any variables that have been defined in the program',
        c: 'a and b',
        d: 'none',
        correct: 'c'
    },{
        question: '41. console.log() can be used to________',
        a: 'display JavaScript values in the debugger',
        b: 'to print any variables that have been defined in the program',
        c: 'a and b',
        d: 'none',
        correct: 'c'
    },{
        question: '41. Upon encountering empty statements, what does the Javascript Interpreter do?',
        a: 'Ignores the statement',
        b: 'Throws in an error',
        c: 'Give a warning sign',
        d: 'none',
        correct: 'a'
    },{
        question: '42. Which of the following methods can be used to display data in some form using Javascript?',
        a: 'document.write()',
        b: 'console.log()',
        c: 'awindow.alert()',
        d: 'all of the above',
        correct: 'd'
    },{
        question: '43. What keyword is used to check whether a given property is valid or not?',
        a: 'document.write()',
        b: 'console.log()',
        c: 'awindow.alert()',
        d: 'all of the above',
        correct: 'd'
    },{
        question: '44. When an operators value is NULL, the typeof returned by the unary operator is',
        a: 'Boolean',
        b: 'Undefined',
        c: 'Object',
        d: 'integer',
        correct: 'c'
    },{
        question: '45. WWhat does the "toLocateString()" method do in JS?',
        a: 'Returns a localized object represented',
        b: 'Returns a parsed string',
        c: 'Returns a localized string represented of an object',
        d: 'None of the Above',
        correct: 'c'
    },{
        question: '46. The process in which an object or data structure is translated into a format suitable for transferral over a network, or storage is called?',
        a: 'Object Serialization',
        b: 'Object Encapsulation',
        c: 'Object inheritance',
        d: 'None of the Above',
        correct: 'a'
    },{
        question: '47. What keyword is used to declare an asynchronous function in Javascript?',
        a: 'async',
        b: 'await',
        c: 'setTimeout',
        d: 'None of the Above',
        correct: 'a'
    },{
        question: '48. How to stop an interval timer in Javascript?',
        a: 'clearinterval',
        b: 'clearTimer',
        c: 'intervalover',
        d: 'None of the Above',
        correct: 'a'
    },{
        question: '49. How are objects compared when they are checked with the strict equality operator?',
        a: 'The references are compared',
        b: 'The content of the objects are compared',
        c: 'Both a and b',
        d: 'None of the Above',
        correct: 'a'
    },{
        question: '50. Which object in Javascript does not have a prototype?',
        a: 'Base Object',
        b: 'All objects have a prototype',
        c: 'None of the object have a prototype',
        d: 'None of the Above',
        correct: 'a'
    }
]


const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit')


let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML= currentQuizData.a;
    b_text.innerHTML= currentQuizData.b;
    c_text.innerHTML= currentQuizData.c;
    d_text.innerHTML= currentQuizData.d;

}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;

}

function deselectAnswers() {
    answerEls.forEach ((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();


    if (answer) {
        if (answer === quizData[currentQuiz].
            correct) {
                score++;
            }

        currentQuiz++;

        if(currentQuiz < quizData.length) {
            loadQuiz();
         } else {
             quiz.innerHTML = '<h2> You answered correctly at ${score}/${quizData.length} questions.</h2> <button onclick="location.reload()">Reload</button>';
         }
    }
});

 