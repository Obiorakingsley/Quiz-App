import { questions } from "./questions.js";

const spanContainer = document.getElementById('progress');
const questionContainer = document.getElementById('topic-question');
const answerContainer = document.getElementById('answers-container');
const totalQuestion = document.getElementById('total-question');
const totalScore = document.getElementById('total-score');
const restartBtn = document.getElementById('restart');



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
