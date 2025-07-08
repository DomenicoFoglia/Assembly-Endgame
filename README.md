# Assembly End Game

Assembly End Game è un gioco sviluppato in React in cui il giocatore deve indovinare una parola italiana nascosta. Le lettere sbagliate fanno "morire" i linguaggi di programmazione progressivamente, con messaggi ironici. Alla vittoria, viene mostrato un effetto di confetti.

---

## Caratteristiche

- Parole casuali in italiano da un dataset di 10.000 parole.
- Tastiera virtuale per scegliere lettere.
- Visualizzazione dinamica dello stato del gioco (vittoria, sconfitta, errori).
- Messaggi divertenti che cambiano in base al numero di errori.
- Confetti animati in caso di vittoria.
- Accessibilità migliorata con `aria-live` e notifiche per screen reader.
- Pulsante "Nuova partita" per ricominciare da capo.

---

## Tecnologie utilizzate

- React 18
- CSS (con classi personalizzate)
- [react-confetti](https://www.npmjs.com/package/react-confetti) per l'animazione vittoria
- [clsx](https://www.npmjs.com/package/clsx) per la gestione delle classi condizionali
- Dataset di parole italiane (`italianWords.js`)

---

## Installazione

1. Clona il repository:

```bash
git clone https://github.com/tuo-username/assembly-end-game.git
cd assembly-end-game
