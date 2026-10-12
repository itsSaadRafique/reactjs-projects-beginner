import Card from './Card'

const App = () => {

  const userInfo = [
    {name: 'Gojo Saturo',
      skill: 'Half-Stack Developer',
      img: '/src/assets/Gojo Satoru.jpeg'
    },
    {name: 'Lawliet',
      skill: 'EARN-Stack Developer',
      img: '/src/assets/lawliet_2.jpeg'
    },
    {name: 'Mikasa Bibi',
      skill: 'Drama Queen',
      img: '/src/assets/Queen Mikasa.jpeg'
    },
    {name: 'Kidoz',
      skill: 'Plumber',
      img: '/src/assets/kidoz.jpeg'
    }
  ]


  return (
    <>
      {userInfo.map((e,idx)=>{
        return <Card key={idx} name={e.name} skill={e.skill} img={e.img} />
      })}
    </>
  )
}

export default App