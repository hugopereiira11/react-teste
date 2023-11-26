import React from 'react'

const MyButton = ({ texto, clique }) => {
  return (
    <button onClick={clique}>Clicou {texto}x</button>
  )
}

export default MyButton
