import { useState } from 'react';
import { useEffect } from 'react';
import createBoard from '../game/createBoard';

export default function Board() {
  const [board, setBoard] = useState([]);

  useEffect(() => {
    setBoard(createBoard());
  }, []);

  return (
    <table>
      {board.map((row, rowIndex) => {
        return (
          <tr>
            {board[rowIndex].map((cell, cellIndex) => {
              return (
                <td className='empty'></td>
              )
            })}
          </tr>
        )
      })}
    </table>
  )
}
