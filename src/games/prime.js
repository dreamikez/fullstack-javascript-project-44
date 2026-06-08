import runGame from "../index.js"
import { getRandomNumber } from "../random.js"

const isPrime  = (number) => {
    if (number < 2) {
        return "no"
    }
    
    for (let i = 2; i < number; i++){
        if (number % i === 0) {
            return "no"
        }
    }

    return "yes"
}

const generateRound = () => {
    const number = getRandomNumber(1, 100)
    const question = String(number)
    const correctAnswer = isPrime(number) ? "yes" : "no"

    return [question, correctAnswer];
}

const playPrimeGame = () => {
    runGame('Answer "yes" if given number is prime. Otherwise answer "no".', generateRound);
};

export default playPrimeGame;