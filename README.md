# Quiz App

## 📝 Overview
This is a simple interactive quiz application built with JavaScript, Html and Css. The app presents users with a series of questions, tracks their score, and provides a summary at the end.

## 🔗 [Live Demo](https://quiz-app-obiora-kingsleys-app.vercel.app/)

## ✨ Features
- Multiple-choice question format
- Progress tracking (shows which questions have been seen)
- Score calculation
- Restart functionality to play again
- Responsive design

## 🛠️ Tech Stack
- ### JavaScripit
- ### HTML5
- ### CSS3

## 📜 How It Works
1. The app loads questions from questions.js
2. For each question:
   - Displays the topic and question
   - Shows multiple choice answers as buttons
3. When a user selects an answer:
   - Checks if it's correct
   - Updates the score if correct
   - Moves to the next question
4. At the end of the quiz:
   - Shows the final score
   - Provides option to restart

## ⚙️ Setup
1. Clone or download the repository
2. Open index.html in a web browser
3. Start answering questions

## 🪄 Customization
To add or modify questions, edit the questions.js file with the following format:

export const questions = [
  {
    **topic:** "Topic name",
    **question:** "Your question here",
    **possibleAnswers:** ["Option 1", "Option 2", "Option 3", "Option 4"],
    **correct:** "Correct answer"
  },
  Add more questions as needed
];

## License
This project is open source and available for anyone to use or modify.

## 👨‍💻 Author
**[Kingsley Obiora]**
