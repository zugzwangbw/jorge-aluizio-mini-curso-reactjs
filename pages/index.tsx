import Head from 'next/head'
import { useState } from 'react'

const Home: React.FC = () => {
  return (
    <div>
    <Head>
    <title>Homepage</title>
    </Head>
    
    <main>
    <h1>Hello World</h1>
    <Contador />
    </main>
    
    <footer>
    <a>Powered by</a>
    </footer>
    </div>
    )
  }
  
  function Contador() {
    const [contador, setContador] = useState(1);
    
    function adicionarContador() {
      setContador(contador + 1);
    }
    
    return (
      <div>
      <div>{contador}</div>
      <button onClick={adicionarContador}>Adicionar</button>
      </div>
      )
    }

export default Home