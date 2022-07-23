export default function Board({board}) {
  return (
    <table>
      {board.map((row, rowIndex) => {
        return (
          <tr>
            {board[rowIndex].map((cell, cellIndex) => {
              return (
                <td className={cell.color}></td>
              )
            })}
          </tr>
        )
      })}
    </table>
  )
}
