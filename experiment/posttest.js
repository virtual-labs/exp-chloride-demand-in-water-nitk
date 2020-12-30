
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
      question: "Chlorine which gets consumed in the oxidation of impurities before disinfection is  ",
      answers: {
        "a": "Free chlorine",
        "b": "Residual chlorine",
        "c": "Residual demand",
        "d": "Chlorine demand"
      },
      correctAnswer: "d"
    },
	{
      question: "The chlorine, which serve as a disinfectant is",
      answers: {
        a: "Residual chlorine",
        b: "Chlorine demand",
        c: "Residual demand",
        d: "Free chlorine"
      },
      correctAnswer: "a"
    },
	{
      question: "The permissible limit of free residual chlorine is ",
      answers: {
        a: "0.02ppm",
        b: "0.2ppm",
        c: "1ppm",
        d: "2ppm"
      },
      correctAnswer: "b"
	},
    {
      question: "What is the chemical formula of bleaching powder? ",
      answers: {
        a: "CaCl",
        b: "Ca(OCl)",
        c: "Ca(OCl)<sub>2</sub>",
        d: "Ca(OCl)<sub>3</sub>"
      },
      correctAnswer: "c"
    },
    {
      question: "Bleaching powder contains ______ of available chlorine.",
      answers: {
        a: "16%",
        b: "33.3%",
        c: "66.6%",
        d: "99.9%"
      },
      correctAnswer: "b"
    }
  ];

// ---------------------------- End -------------------------------

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
