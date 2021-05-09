import React, { useState, useEffect } from 'react';
import './Play.scss';
import bg from '../../images/bg-pentagon.svg';
import sc from '../../images/icon-scissors.svg';
import pa from '../../images/icon-paper.svg';
import ro from '../../images/icon-rock.svg';
import li from '../../images/icon-lizard.svg';
import sp from '../../images/icon-spock.svg';

const Play = ({ handleScore }) => {
  const [userChoice, setUserChoice] = useState(0);
  const choices = ['sc', 'pa', 'ro', 'li', 'sp'];
  const imgs = { bg, sc, pa, ro, li, sp };
  const [hChoice, setHChoice] = useState(0);
  const [result, setResult] = useState('lose');

  const reset = () => {
    setUserChoice(0);
    setHChoice(0);
    setResult('lose');
  };

  useEffect(() => {
    if (userChoice) {
      const rChoice = choices[Math.floor(Math.random() * 5)];
      setHChoice(rChoice);
      if (rChoice === userChoice) {
        setResult('draw');
      } else {
        const mergedChoices = userChoice + rChoice;

        switch (mergedChoices) {
          case 'scpa':
          case 'scli':
          case 'spsc':
          case 'rosc':
          case 'paro':
          case 'pasp':
          case 'lipa':
          case 'roli':
          case 'spro':
          case 'lisp':
            handleScore(false);
            setResult('win');
            break;
          default:
            handleScore(true);
            setResult('lose');
        }
      }
    }

    // eslint-disable-next-line
  }, [userChoice]);
  const handleResult = e => {
    if (e.target.dataset.name) {
      setUserChoice(e.target.dataset.name);
    }
  };

  return (
    <>
      {!userChoice ? (
        <section className="shape-pick" onClick={handleResult}>
          <img src={bg} alt="" width="100%" />
          <div data-name="sc" className="shape sc">
            <img src={sc} alt="scissors" data-name="sc" />
          </div>
          <div data-name="pa" className="shape pa">
            <img src={pa} alt="paper" data-name="pa" />
          </div>
          <div data-name="ro" className="shape ro">
            <img src={ro} alt="rock" data-name="ro" />
          </div>
          <div data-name="li" className="shape li">
            <img src={li} alt="lizard" data-name="li" />
          </div>
          <div data-name="sp" className="shape sp">
            <img src={sp} alt="spock" data-name="sp" />
          </div>
        </section>
      ) : (
        <section className="result-container">
          <div className={`pick ${result === 'win' ? 'winner' : ''}`}>
            you picked
            <div className={`shape ${userChoice}`}>
              <img src={imgs[userChoice]} alt="your pick" />
            </div>
          </div>
          <div className="result">
            {`you ${result}`}
            <button type="button" onClick={reset} className="play-again">
              play again
            </button>
          </div>
          <div className={`pick ${result === 'lose' ? 'winner' : ''}`}>
            the house picked
            <div className={`shape ${hChoice}`}>
              <img src={imgs[hChoice]} alt="House pick" />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Play;
