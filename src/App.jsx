import { useState, useRef, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import languages from './languages'
import Language from './components/Language'
import Box from './components/Box'
import clsx from 'clsx';
import getRandomDeathMessage from './messages';

function AssemblyEndGame() {
  // State values
  const [currentWord, setCurrentWord] = useState("elefante");
  const [guessedLetters, setGuessedLetters] = useState([]);
  
  // Valori derivati
  const wrongAttempts = guessedLetters.filter(
    letter => !currentWord.includes(letter)).length;
  const isGameWon = currentWord.split("").every(letter => guessedLetters.includes(letter) );
  const isGameLost = wrongAttempts >= languages.length - 1;
  const isGameOver = isGameWon || isGameLost;
  const lastAttempt = guessedLetters[guessedLetters.length - 1];
  const isLastAttemptWrong = lastAttempt && !currentWord.includes(lastAttempt);
  

  function splitWord(){
    const word = currentWord.split("").map((char, index) => <Box key={index} char={char} guessedLetters={guessedLetters} currentWord={currentWord}/>);
    return word;
  }

  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  function addGuessedLetter(letter){
    setGuessedLetters(prevLetters => prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter])
  }

  const keyboardElements = alphabet.map(letter => {
    const isGuessed = guessedLetters.includes(letter);
    const isCorrect = isGuessed && currentWord.includes(letter);
    const isWrong = isGuessed && !currentWord.includes(letter);
    const className = clsx({
      correct: isCorrect,
      wrong: isWrong
    })
    return (
      <button 
        className={className}
        key={letter} 
        disabled={isGameOver}
        aria-disabled={guessedLetters.includes(letter)}
        aria-label={`Letter ${letter}`}
        onClick={() => addGuessedLetter(letter)}>
          {letter.toUpperCase()}
      </button>
    )
  })

  // Game status

  function renderGameStatus(isGameOver, isGameWon, wrongAttempts, languages) {
  // Se siamo in mezzo alla partita e ci sono errori, mostra messaggio errore
  if (!isGameOver && isLastAttemptWrong) {
    const deadLanguage = languages[wrongAttempts - 1].name;
    const msg = getRandomDeathMessage(deadLanguage);
    console.log(msg);
    
    return (
      <section aria-live='polite' role='status' className="container rounded mt-5 status-message game-status-error status-animate">
        <div className="d-flex justify-content-center flex-column align-items-center" style={{ minHeight: "120px" }}>
          <h2 className="mt-2">Oops!</h2>
          <p className="mb-2">{msg}</p>
        </div>
      </section>
    );
  }

  // Se il gioco è finito
  if (isGameOver) {
    return (
      <section aria-live='polite' role='status'
        className={`container rounded mt-5 status-message
          ${isGameWon ? "game-status-win status-animate" : "game-status-lost status-animate"}`}>
        <div className="d-flex justify-content-center flex-column align-items-center" style={{ minHeight: "120px" }}>
          <h2 className="mt-2">{isGameWon ? "You win!" : "Game Over 💀!"}</h2>
          <p className="mb-2">{isGameWon ? "Well done!" : "You Lose! You have to learn Assembler now!"}</p>
        </div>
      </section>
    );
  }

  // Inizio gioco, niente da mostrare ma mantieni spazio vuoto
  return (
    <section aria-live='polite' role='status' className="container rounded mt-5 status-message" style={{ minHeight: "120px" }}>
      {}
    </section>
  );
}



  return (
    <>
    <Header />
      <main>
        {renderGameStatus(isGameOver, isGameWon, wrongAttempts, languages)}
        <section className='container rounded mt-5'>
          <div className='d-flex flex-wrap justify-content-center gap-2'>
            {
              languages.map((lang, index) => (
                <Language key={lang.name} name={lang.name} backgroundColor={lang.backgroundColor} color={lang.color} isDead={index < wrongAttempts}/>
              ))
            }
          </div>
        </section>
        <section className='container mb-5'>
          <div className='row justify-content-center align-items-center'>
            {splitWord()}
          </div>
        </section>
        <section className="keyboard d-flex justify-content-center gap-1 mt-2 mx-auto">
          {keyboardElements}
        </section>
        {/* For screen-reader */}
        <section className='sr-only' aria-live='polite' role='status'>
            <p>
              {currentWord.includes(lastAttempt) ? 
                `Correct! the letter ${lastAttempt} is inthe word!` :
                `Sorry, the letter ${lastAttempt} is not in the word`}
            </p>
            <p>Current word: {currentWord.split("").map(letter => guessedLetters.includes(letter) ? letter + "." : "blank")}</p>
        </section>
        <section className='container mt-5 d-flex justify-content-center'>
          {isGameOver && <button className='btn btn-new-game'>New game</button>}
        </section>
      </main>
    </>
  )
}

export default AssemblyEndGame
