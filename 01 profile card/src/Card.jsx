
const Card = (props) => {
  console.log(props)
  return (
    <div className='card-container'>
        <div className="image-div">
            <img src={props.img}/>
        </div>

        <div className='info-div'>
            <h1>{props.name}</h1>
            <h3>{props.skill}</h3>
            <div className='social-links'>
              <img src="/src/icons/facebook-brands-solid-full.svg" alt="" />
              <img src="/src/icons/github-brands-solid-full.svg" alt="" />
              <img src="/src/icons/twitter-brands-solid-full.svg" alt="" />
              <img src="/src/icons/telegram-brands-solid-full.svg" alt="" />
            </div>
        </div>
        
    </div>
    
    
  )
}

export default Card