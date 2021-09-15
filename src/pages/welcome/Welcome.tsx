import React from 'react'
import BottomDiv from '../../components/WelcomeComponents/BottomDiv/BottomDiv'
import Greeting from "../../components/Greeting/Greeting"
import LogoDIv from '../../components/WelcomeComponents/LogoDIv/LogoDIv'
 
function Welcome() {


 
    return (
        <div>
            <Greeting /> 
            <LogoDIv />
            <BottomDiv/>
        </div>
    )
}

export default Welcome
