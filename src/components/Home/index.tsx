import React from "react"

export const Home = ({id}: any) => {
    return(
        <div id={id}>
        <div>
            <p>{React.createElement('h1', null, '<MariaClaraTabosa')}</p>
            <p>{React.createElement('p', null, 'FrontEndDeveloper={true}')}</p>
            <p>{React.createElement('p', null, 'BackEndStudent={true}')}</p>
            <p>{React.createElement('p', null, 'ComputerScienceStudent={true} />')}</p>
        </div>
        <div>
            <img src="" alt="" />
        </div>
        </div>
    )
}