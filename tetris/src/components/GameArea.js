import '../styles/GameArea.css'
import Board from './Board.js';
import { useState, useEffect } from 'react';
import createTetromino from '../game/createTetromino';


export default function GameArea() {
const [tetronimos, setTetronimos] = useState([])

  const moveTetronimoDown = (tetronimo) => {
    const newTetronimo = tetronimo.cells.map(cell => {
      return [cell[0] + 1, cell[1]]
    })
    if(!collision(newTetronimo)) {
      return newTetronimo
    }
  }

  const collision = (tetronimo) => {
    //collision with edge
    for(let i = 0; i < tetronimo.cells.length; i++) {
      if(tetronimo.cells[i][0] < 0 || tetronimo.cells[i][0] > 14) {
        return true
      }
      if(tetronimo.cells[i][1] < 0 || tetronimo.cells[i][1] > 9) {
        return true
      }
    }
  }

  useEffect(() => {
    setInterval(() => {
      const currentTetronimo = tetronimos.find(tetronimo => tetronimo.active)
      if(tetronimos.length < 1 || !currentTetronimo) {
        setTetronimos([...tetronimos, createTetromino()])
      }else{
        //move tetronimo down
        

      }
    }, 300)
  }, [])

  return (
    <div className='GameArea'>
      <Board/>
    </div>
  )
}
