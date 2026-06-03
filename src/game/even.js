import readlineSync from 'readline-sync';
import getUserName from '../cli.js';
import { getRandomNumber } from '../utils.js';

const isEven = (num) => num % 2 === 0


const playEvenGame = () => {
    console.log("Welcome to the Brain Games!")
    const userName = getUserName()
    console.log(`Hello, ${userName}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
    

    let correctAnswersCount = 0;
    const maxRounds = 3;

    for (let i = correctAnswersCount; i < maxRounds; i++) {
        const question = getRandomNumber()
        console.log(`Question: ${question}`)
        const userAnswer = readlineSync.question("Your answer: " )
        const correctAnswer = isEven(question) ? 'yes' : 'no'

        if (userAnswer !== correctAnswer) {
            console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`)
            console.log(`Let's try again, ${userName}!`);
            return;
        }

        console.log('Correct!');
        correctAnswersCount += 1;
    }

    console.log(`Congratulations, ${userName}!`);
}

export default playEvenGame
