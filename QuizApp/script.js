const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'RESTART'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What is the Second Tallest Building In the World?',
    answers: [
      { text: 'Shanghai Tower', correct: true },
      { text: 'Burj Khalifa', correct: false },
      { text: 'The Indpendent', correct: false },
      { text: 'Salesforce Tower', correct: false }
    ]
  },
  {
    question: 'What is the oldest song from these choices?',
    answers: [
      { text: 'You Shook Me All Night Long', correct: true },
      { text: 'Wake Me Up Before You Go-Go', correct: false },
      { text: 'Billie Jean', correct: false },
      { text: 'Take On Me', correct: false }
    ]
  },
  {
    question: 'Is This Quiz Well Made?',
    answers: [
      { text: 'Yes', correct: true },
      { text: 'No', correct: false }
    ]
  },
  {
    question: 'What is the solution to the equation 2(x - 3) = 4x - 1?',
    answers: [
      { text: '-5/2', correct: true},
      { text: '-2.5', correct: true },
      { text: '2', correct: false},
      { text: '-1', correct: false}
    ]
  },
  {
    question: 'Which One Of These is NOT a Dealthy Hallow in Harry Potter?',
    answers: [
      { text: 'Wand of Destiny', correct: false },
      { text: 'The Ressurrection Stone', correct: false },
      { text: 'Rowena Ravenclaws Tenebrific Diadem', correct : true },
      { text: 'The Cloak Of Invisibility', correct : false }
    ]
  },
  {
    question: 'What is the Discord Bot I Made?',
    answers: [
      { text: 'MEE6', correct: false },
      { text: 'Rhythm', correct: false },
      { text: 'Xenon', correct: false },
      { text: 'BakaBot', correct: true }
    ]
  },
  {
    question: 'Is Mr.Bordes A Good Computer Tech Teacher?',
    answers: [
      { text: 'Yes', correct: true },
      { text: 'No', correct: false },
    ]
  },
  {
    question: 'Which of these is NOT the Elvish language In Middle Earth (Lord Of the Rings World)?',
    answers: [
      { text: 'Taliska', correct: true },
      { text: 'Telerin', correct: false },
      { text: 'Sindarin', correct: false },
      { text: 'Khuzdul', correct: false }
    ]
  }
]
