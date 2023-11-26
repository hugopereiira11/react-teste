import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Home = ({onSubmit, onChange}) => {
  <div>
    <form onSubmit={onSubmit}>
      <input type="text" onChange={onChange} placeholder='Digite seu nome...' required />
      <input type="submit" value="Confirmar" />
    </form>
  </div>
}

export default Home
