import '../styles/GameArea.css'
import Board from './Board.js';
import { useState } from 'react';
import { useEffect } from 'react';
import createBoard from '../game/createBoard';

export default function GameArea() {

  const [board, setBoard] = useState([]);

  useEffect(() => {
    setBoard(createBoard());
  }, []);

  return (
    <div className='GameArea'>
      <Board board={board}/>
    </div>
  )
}
