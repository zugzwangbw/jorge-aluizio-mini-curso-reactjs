import Head from 'next/head'
import React, { useState } from 'react'

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Jazbewor</title>
      </Head>

      <main>
        <p>Teste React para site Jazbewor</p>
        <Contador />
      </main>

      <footer>
        <a>Powered by</a>
      </footer>
    </React.Fragment>
  )
}

function Contador() {
  const [contador, setContador] = useState(0)

  function adicionarContador() {
    setContador(contador + 1)
  }

  // setTimeout(() => {
  //   setContador(contador + 1)
  // }, 3000)

  return (
    <div>
      <div>{contador}</div>
      <button onClick={adicionarContador}>Adicionar</button>
    </div>
  )
}

export default Home
