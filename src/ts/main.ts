import morseCodeJson from '../json/morse_code.json';
import './accordion';

const keys = Object.keys(morseCodeJson);
const quizText = document.getElementById('js-quiz');
const quizTips = document.getElementById('js-quiz-tips');
// const form = <HTMLFormElement>document.getElementById('js-form-input');
const formInput = <HTMLInputElement>document.getElementById('js-form-input');
const formButton = document.getElementById('js-form-button');

const arrayShuffle = (array: string[]) => {
  const numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < numArray.length - 1; i++) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

const quizShow = (slicedKey: string[]) => {
  for (let i = 0; i < slicedKey.length; i++) {
    const slicedKeyNum: string = slicedKey[i];
    // あとで解決
    const element: string = morseCodeJson[Number(slicedKeyNum)];

    if (quizText != null) {
      const new_element = document.createElement('p');
      new_element.textContent = element;
      quizText.appendChild(new_element);
    }
  }
};

const quizTipsShow = () => {
  for (let i = 0; i < keys.length; i++) {
    if (quizTips != null) {
      const element = document.createElement('p');
      // あとで解決
      element.textContent = `${i} : ${morseCodeJson[i]}`;
      quizTips.appendChild(element);
    }
  }
};

const checkAnswer = (answer: string) => {
  if (formInput != null && formButton != null) {
    formButton.addEventListener('click', () => {
      const formInputValue = formInput.value;

      if (formInputValue.match(`^${answer}$`)) {
        alert('正解\ncorrect answer');
        // todo: 動かないので、後で修正
        // if (form != null) {
        //   form.reset();
        // }
        eraseQuizText();
        arrayShuffle(keys);

        const slicedKey = keys.slice(0, 6);
        answer = slicedKey.join('');

        quizShow(slicedKey);
      } else {
        alert('不正解\nincorrect answer');
      }
    });
  }
};

const eraseQuizText = () => {
  if (quizText != null) {
    while (quizText.firstChild) {
      quizText.removeChild(quizText.firstChild);
    }
  }
};

arrayShuffle(keys);

const slicedKey = keys.slice(0, 6);
const answer = slicedKey.join('');

quizShow(slicedKey);
quizTipsShow();
checkAnswer(answer);
