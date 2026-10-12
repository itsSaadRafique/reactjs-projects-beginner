const Card = (props) => {

  return (
    <div className='container'>
        <h3 className='skill'>{props.skill}</h3>
        <img className='img' src={props.image}/>
        <h1 className='name'>{props.name} </h1>
    </div>
  )
}

export default Card