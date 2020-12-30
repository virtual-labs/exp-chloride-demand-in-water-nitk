
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


// Don't touch the above code




// Write your MCQs here --- Start --- --------------------

  const myQuestions = [
    {
      question: "At what pH, chlorine exists as molecular chlorine? ",
      answers: {
        a: "3",
        b: "5",
        c: "&lt; 5",
        d: "&lt; 10"
      },
      correctAnswer: "c"
    },

    {
      question: "Which of the following is termed as free available chlorine?  ",
      answers: {
        a: "Hypochlorous acid",
        b: "Hypochlorite ions",
        c: "Molecular chlorine",
        d: "All of the above"
      },
      correctAnswer: "d"
    },

    {
      question: "When the pH is between 5 and 10, the chlorine in the water acts as ______ ",
      answers: {
        a: "Hypochlorous acid",
        b: "Hypochlorite ions",
        c: "Molecular chlorine",
        d: "Hypochlorous acid hypochlorite ions"
      },
      correctAnswer: "d"
    },
    {
        question: "At what pH, chlorine in water acts as only hypochlorite ions?  ",
        answers: {
          a: "&gt; 10",
          b: "&gt; 5",
          c: "&lt; 5",
          d: "&lt; 3"
        },
        correctAnswer: "a"
      },
    {
        question: "The hypochlorous acid is ______ times effective as hypochlorite ions. ",
    answers: {
          a: "10",
          b: "30",
          c: "50",
          d: "80"
        },
        correctAnswer: "d"
      }
  ];

// ---------------------------- End -------------------------------

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
