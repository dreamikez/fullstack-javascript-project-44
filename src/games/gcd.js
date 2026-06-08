import runGame from "../index.js"
import { getRandomNumber } from "../random.js"

const gcd = (a, b) => {
    let num1 = Math.abs(a)
    let num2 = Math.abs(b)

    while (num2 !== 0) {
        let temp = num2
        num2 = num1 % num2
        num1 = temp
    }

    return num1
}

const generateRound = () => {
    const num1 = getRandomNumber(1, 100)
    const num2 = getRandomNumber(1, 100)
    const question = `${num1} ${num2}`
    const correctAnswer = String(gcd(num1, num2))
    return [question, correctAnswer]
};

const playGcdGame = () => {
    runGame('Find the greatest common divisor of given numbers.', generateRound);
};

export default playGcdGame;