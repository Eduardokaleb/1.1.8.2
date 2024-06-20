import { personagens } from "./Personagens";

function App() {
  const Personagens_Redfield = personagens.filter(personagen =>
    personagen.nome.includes('Redfield')
  );
  return (
    <div>
      <h1>Personagens Redfield</h1>
      <ul>
        {
          Personagens_Redfield.map(personagen => {
            return (
              <div>
                <h4>{personagen.nome}</h4>
                <img src={personagen.url.toString()}/>
              </div>
            )
          })
        }
      </ul>
    </div>
  )
}

export default App;

export const personagens = [
    {
      nome: 'Leon S. Kennedy',
      url: 'https://static.wikia.nocookie.net/residentevil/images/1/1d/LeonRE2RemakeRender.png',
    },
    {
      nome: 'Jill Valentine',
      url: 'https://i.imgur.com/XOR8PHl.png',
    },
    {
      nome: 'Claire Redfield',
      url: 'https://i.imgur.com/Jg0s8kP.png',
    },
    {
      nome: 'Chris Redfield',
      url: 'https://i.imgur.com/mQhIyKH.png',
    },
    {
      nome: 'Ada Wong',
      url: 'https://i.imgur.com/BS2Kfc8.png',
    },
    {
      nome: 'Albert Wesker',
      url: 'https://static.wikia.nocookie.net/residentevil/images/e/e4/Wesker_Revelations_2_Render.png',
    },
    {
      nome: 'Alex Wesker',
      url: 'https://static.wikia.nocookie.net/residentevil/images/d/d8/Alex_Wesker.png',
    }
  ]