import React from 'react'

const List = ({name}) => {
  const list = [
    {
      nome: "Hugo",
      idade: 22
    },
    {
      nome: "Diego",
      idade: 19
    }
  ]

  return (
    <>
      <h1>Olá {name}</h1>

      <ol>
        {
          list.map((val) => (
          <li>{val.nome} - {val.idade} anos </li>
          ))
        }
      </ol>

    
    </>
  )
}

export default List
