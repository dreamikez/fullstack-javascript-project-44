import runGame from "../index.js"
import { getRandomNumber } from "../random.js"

const generateProgression = () => {
    const progressionLength = getRandomNumber(5, 10);
    const invisiblePosition = getRandomNumber(0, progressionLength);
    const progressionValue = getRandomNumber(1, 15);
    const firstValue = getRandomNumber(1, 100);

    const result = [];
    let correctAnswer = null;

    for (let i = 0; i <= progressionLength; i++) {
        const value = firstValue + i * progressionValue;
        if (i === invisiblePosition) {
            result.push('..');
            correctAnswer = String(value);
        } else {
            result.push(value);
        }
    }

    const question = result.join(' ');
    return [question, correctAnswer];
};

const playProgressionGame = () => {
    runGame('What number is missing in the progression?', generateProgression);
};

export default playProgressionGame;