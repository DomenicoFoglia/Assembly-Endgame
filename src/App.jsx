import { useState, useRef, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import languages from './languages'
import Language from './components/Language'
import Box from './components/Box'
import clsx from 'clsx';

function AssemblyEndGame() {
  // State values
  const [currentWord, setCurrentWord] = useState("react");
  const [guessedLetters, setGuessedLetters] = useState([]);
  
  // Valori derivati
  const wrongAttempts = guessedLetters.filter(
    letter => !currentWord.includes(letter)).length;
  const isGameWon = currentWord.split("").every(letter => guessedLetters.includes(letter) );
  const isGameLost = wrongAttempts >= languages.length - 1;
    const isGameOver = isGameWon || isGameLost;
  

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
        onClick={() => addGuessedLetter(letter)}>
          {letter.toUpperCase()}
      </button>
    )
  })




  

  return (
    <>
    <Header />
      <main>
        <section className='game-status container rounded mt-5'>
          <div className='d-flex justify-content-center flex-column align-items-center'>
            <h2 className='mt-2'>You win!</h2>
            <p className='mb-2'>Well done!</p>
          </div>
        </section>
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
        <section className='container mt-5 d-flex justify-content-center'>
          {isGameOver && <button className='btn btn-new-game'>Nuova partita</button>}
        </section>
      </main>
    </>
  )
}

export default AssemblyEndGame
