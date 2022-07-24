export default function moveTetronimoDown(tetronimo, tetronimos) {
  const newCells = tetronimo.cells.map(cell => {
    return [cell[0], cell[1] + 1]
  })
  const newTetronimo = { ...tetronimo, cells: newCells }
  if(!collision(newTetronimo, tetronimos)) {
    return newTetronimo
  } else {
    console.log('collision')
    //return deactivated tetronimo
    return {
      ...tetronimo,
      active: false
    }
  }
}

const collision = (tetronimo, tetronimos) => {
  //collision with edge
  if(tetronimo.cells.some(cell => cell[1] >= 15)) {
    return true
  }

  //for each cell in this tetronimo check if it overlaps with any other tetronimo
  if(tetronimo.cells.some(cell => {
    return tetronimos.some(otherTetronimo => {
      if(!otherTetronimo.active) {
        return otherTetronimo.cells.some(otherCell => {
          return otherCell[0] === cell[0] && otherCell[1] === cell[1]
        })
      }
    })
  })){
    return true
  }

  //if no collision return false
  return false
}
