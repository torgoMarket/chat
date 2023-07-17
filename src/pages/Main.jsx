import React from 'react'
import Form from '../components/form/Form'
import TypeText from "../components/UI/TypeText"
import mainBackgroundImage from "../images/mainBackground.png"

const Main = () => {
  return (
    <div className='mainPage'>
        <div className="mainTitle">
          <span>Welcome</span><br /> <TypeText text="Unlock a World of Conversations Join Our Lively Chat Community!" delay={100} /> 
        </div>
        <Form></Form>
    </div>
  )
}

export default Main