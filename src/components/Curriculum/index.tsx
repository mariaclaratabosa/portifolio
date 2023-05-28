import React from "react"
import { LinearProgress } from "@mui/material"

export const Curriculum = ({id}:any) => {
    const skills = [
        {label: 'HTML', value: 100},
        {label: 'CSS', value: 100},
        {label: 'JavaScript', value: 100},
        {label: 'TypeScript', value: 80},
        {label: 'React', value: 95},
        {label: 'Tailwind CSS', value: 90},
        {label: 'Styled-components', value: 100},
        {label: 'Node.js', value: 60},
        {label: 'Git', value: 100},
        {label: 'GitHub', value: 100},
    ]
    return(
        <div id={id}>
        <p>{React.createElement('p', null, '<Currículo />')}</p>
        <div>
      {skills.map(skill => (
        <div key={skill.label}>
          <p>{skill.label}</p>
          <p>{`${skill.value}%`}</p>
          <LinearProgress variant="determinate" value={skill.value} />
        </div>
      ))}
    </div>
    <button>Ver currículo</button>
    </div>
    )
}