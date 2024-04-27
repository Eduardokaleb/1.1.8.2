import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { personagens } from './personagens'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>personagens</h1>
      
      
    </>
  )
}

function listarpersonagens (){
const listarpersonagens = personagens.filter(listarpersonagens => personagens);
return (
  <div>
    <h1>{personagens}</h1>
    <h4>Resident Evil</h4>
    <img src={personagens} alt="" />
    {
      listarpersonagens.map(personagem =>{
        return(
          <div>
            <h1>{personagem.nome}</h1>
            <img src={personagem.url} alt="" />
          </div>
        )
      })
    }


  </div>
)

}

export default App
