import { createContext } from 'react'
export const cardContext = createContext()

const Context = (props) => {

const userInfo = [
    {
        name : 'GOJO',
        skill : 'DOMAIN EXPANSION',
        image : "/src/assets/Satoru Gojo.jpeg"
    },
    {
        name : 'MAKIMA',
        skill : 'SMART',
        image : "/src/assets/makima.jpeg"
    },
    {
        name : 'KIRUA',
        skill : 'ALERT',
        image : "/src/assets/red-eye.jpeg"
    },
    {
        name : 'KAKASHI',
        skill : 'SHADOW',
        image : "/src/assets/kakashi.jpeg"
    },
    {
        name : 'EREN',
        skill : 'CALM',
        image : "/src/assets/eren.jpeg"
    },
    {
        name : 'GOKU',
        skill : 'IRON FIST',
        image : "/src/assets/goku.jpeg"
    },
    {
        name : 'JINNY',
        skill : 'MANIPULATOR',
        image : "/src/assets/jinny.jpeg"
    },
    {
        name : 'GOKU',
        skill : 'IRON FIST',
        image : "/src/assets/goku2.jpeg"
    },
    {
        name : 'GOJO',
        skill : 'ONE-SHOT',
        image : "/src/assets/gojo2.jpeg"
    },
    {
        name : 'GOKU',
        skill : 'IRON FIST',
        image : "/src/assets/goku3.jpeg"
    },
    {
        name : 'MADARA',
        skill : 'FURY',
        image : "/src/assets/madara.jpeg"
    },
    {
        name : 'MEGUMI',
        skill : 'WOLFIE',
        image : "/src/assets/megumi.jpeg"
    },
    {
        name : 'SUKUNA',
        skill : 'FEARLESS',
        image : "/src/assets/sukuna.jpeg"
    },
    {
        name : 'UCHIHA',
        skill : 'ATTITUDE',
        image : "/src/assets/uchiha.jpeg"
    },
    {
        name : 'LIGHT',
        skill : 'NERD',
        image : "/src/assets/light2.jpeg"
    },
    {
        name : 'LAWLIET',
        skill : 'DETECTIVE',
        image : "/src/assets/l.jpeg"
    }
    
]


  return (
    <div>
        <cardContext.Provider value = {userInfo}>
            {props.children}
        </cardContext.Provider>
    </div>
  )
}

export default Context