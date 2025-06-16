const spanContainer = document.getElementById('progress');
const questionContainer = document.getElementById('topic-question');
const answerContainer = document.getElementById('answers-container');
const totalQuestion = document.getElementById('total-question');
const totalScore = document.getElementById('total-score');
const restartBtn = document.getElementById('restart');

let questions = [{
  topic: 'Science',
  question: 'What color is the sky',
  possibleAnswers: ['green', 'blue', 'red'],
  correct: 'blue'
},
{
  topic: 'Tech',
  question: 'What does "AI" stand for',
  possibleAnswers: ['Automated Intelligence', 'Artificial Intelligence', 'Advanced Interface'],
  correct: 'Artificial Intelligence'
},
{
  topic: 'History',
  question: 'Who was the first president of the United States',
  possibleAnswers: ['Thomas Jefferson', 'Abraham Lincoln', 'George Washington'],
  correct: 'George Washington'
},
{
  topic: 'Geography',
  question: 'Which is the longest river in the world',
  possibleAnswers: ['Amazon River', 'Nile River', 'Yangtze River'],
  correct: 'Nile River'
},
{
  topic: 'Entertainment',
  question: 'Who played the role of Iron Man in the Marvel Cinematic Universe',
  possibleAnswers: ['Chris Evans', 'Robert Downey Jr.', 'Chris Hemsworth'],
  correct: 'Robert Downey Jr.'
},
{
  topic: 'Sports',
  question: 'Which country won the FIFA World Cup in 2022',
  possibleAnswers: ['France', 'Argentina', 'Brazil'],
  correct: 'Argentina'
},
{
  topic: 'Tech',
  question: 'Whats the best programming language',
  possibleAnswers: ['Python', 'javascript', 'Css'],
  correct: 'javascript'
},
{
  topic: 'Science',
  question: 'What is the chemical symbol for Gold',
  possibleAnswers: ['Go', 'Gd', 'Au'],
  correct: 'Au'
},
{
  topic: 'History',
  question: 'Who was the first President of the United States',
  possibleAnswers: ['Thomas Jefferson', 'Abraham Lincoln', 'George Washington'],
  correct: 'George Washington'
},
{
  topic: 'Sports',
  question: 'Which country won the FIFA World Cup in 2018',
  possibleAnswers: ['Brazil', 'Germany', 'France'],
  correct: 'France'
},
{
  topic: 'Movies',
  question: 'Who directed the movie "Inception"',
  possibleAnswers: ['Steven Spielberg', 'Christopher Nolan', 'Quentin Tarantino'],
  correct: 'Christopher Nolan'
},
{
  topic: 'Music',
  question: 'Which band is known as the "Fab Four"',
  possibleAnswers: ['The Rolling Stones', 'The Beatles', 'Led Zeppelin'],
  correct: 'The Beatles'
},
{
  topic: 'Math',
  question: 'What is the value of π (Pi) rounded to two decimal places',
  possibleAnswers: ['3.14', '3.16', '3.12'],
  correct: '3.14'
},
{
  topic: 'Literature',
  question: 'Who wrote "To Kill a Mockingbird"',
  possibleAnswers: ['J.K. Rowling', 'Harper Lee', 'Mark Twain'],
  correct: 'Harper Lee'
},
{
  topic: 'Food',
  question: 'Which country is the origin of sushi',
  possibleAnswers: ['China', 'Japan', 'Korea'],
  correct: 'Japan'
},
{
  topic: 'Animals',
  question: 'What is the largest mammal on Earth',
  possibleAnswers: ['Elephant', 'Blue Whale', 'Giraffe'],
  correct: 'Blue Whale'
}
]

let questionIndex = 1;

totalQuestion.textContent = questions.length



function renderQuestion(index){

// Create span tag
  let spans = '';
  questions.forEach(question => {
    spans += `<span></span>`;
  });
  spanContainer.innerHTML = spans

  const spanElement = spanContainer.querySelectorAll('span')
  for(let index = 0; index < questionIndex; index++){
    spanElement[index].classList.add('seen')
  }

// Update question
  let html = `<p class="topic" id="topic">
    ${questions[index].topic}
  </p>  
  <h1 class="question" id="question">
    ${questions[index].question+'?'}
  </h1>
    `;
  questionContainer.innerHTML = html;

//Create buttons
  let answers = '';
  questions[index].possibleAnswers.forEach(answer => {
    answers += `<button>${answer}</button>`
  })
  answerContainer.innerHTML = answers;

  const buttonElement = answerContainer.querySelectorAll('button');

  buttonElement.forEach(button => {
    button.addEventListener('click', (event) => {
      
      if(event.target.textContent === questions[index].correct){
        totalScore.textContent++
        console.log('correct');
      }else{
        console.log('wrong');
      }
      if(questionIndex === questions.length){
        questionIndex = 1;
        document.querySelector('.quiz-container').style.display = 'none';
        document.querySelector('.score').style.display = 'grid';
        renderQuestion(questionIndex - 1)
      }else{
        console.log(event.target.textContent)
        questionIndex++;
        renderQuestion(questionIndex - 1)
      }
    })
  })

}

renderQuestion(questionIndex - 1)

restartBtn.addEventListener('click', () => {
  questionIndex = 1;
  document.querySelector('.quiz-container').style.display = 'flex';
  document.querySelector('.score').style.display = 'none';
  totalScore.textContent = 0;
  renderQuestion(questionIndex - 1)
})
