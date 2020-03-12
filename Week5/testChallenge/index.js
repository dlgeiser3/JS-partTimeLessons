const questionList = [
  {
    question: 'Snakes',
    id: 1,
    answers: {
      a: 'Snakes speak to me.',
      b: 'Snakes eat me.',
    }
  },
  {
    question: 'Living Arrangements',
    id: 2,
    answers: {
      a: 'I live in a closet under the stairs.',
      b: 'I live in a glass container.',
    }
  },
  {
    question: 'Flying',
    id: 3,
    answers: {
      a: 'I can fly on a broomstick.',
      b: 'I only fly if I am thrown.',
    }
  },
]

let quizForm = document.querySelector('#quiz')
let ques = document.createElement('input')
let ques2 = document.createElement('input')
let answer = document.createElement('label')
let answer2 = document.createElement('label')
console.log(quizForm)

for (i = 0; i < questionList.length; i++) {
  quizForm.appendChild(ques)
  quizForm.appendChild(answer)
  ques.type = 'radio'
  ques.value = questionList[i].id
  ques.id = questionList[i].question
  answer.setAttribute('for', questionList[i].question);
  answer.innerText = questionList[i].answers.a
  
  quizForm.appendChild(ques2)
  quizForm.appendChild(answer2)
  ques2.type = 'radio'
  ques2.value = questionList[i].id
  ques2.id = questionList[i].question
  answer2.setAttribute('for', questionList[i].question);
  answer2.innerText = questionList[i].answers.b

  console.log(questionList[i])
}