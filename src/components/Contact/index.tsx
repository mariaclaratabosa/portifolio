import React from "react"
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai"

export const Contact = ({id}:any) => {
    return(
        <div id={id}>
        <p>{React.createElement('h1', null, '<Contatos />')}</p>
        <div>
            <AiFillLinkedin />
            <AiFillGithub />
            <AiOutlineMail />
        </div>
        </div>
    )
}