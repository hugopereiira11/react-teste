import React, { useEffect, useState } from 'react';

const App = () => {
  const [nome, setNome] = useState('')
  const [content, setContent] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('name')) {
      setNome(localStorage.getItem('name'))
      setContent(true)
    }
  }, [])

  function login() {
    localStorage.setItem('name', nome)
    setContent(true)
  }

  function sair() {
    localStorage.removeItem('name')
    setContent(false)
  }

  return (
    <>
      {content ? (
        <div>
          <h1>Olá, {localStorage.getItem('name')}!</h1>
          <h2>Seja bem vindo</h2>
          <button onClick={sair}>Sair</button>
        </div>
      ) : (
        <div>
          <form onSubmit={login}>
            <input type="text" onChange={(e) => setNome(e.target.value)} placeholder='Digite seu nome...' required />
            <input type="submit" value="Sair" />

          </form>
        </div>
      )}
    </>
  )
}

export default App;

