import React from "react"
import { DiHtml5, DiCss3, DiJsBadge, DiReact, DiGit, DiGithubBadge, DiNodejsSmall } from "react-icons/di"
import { SiTypescript, SiTailwindcss, SiStyledcomponents } from "react-icons/si"

export const About = ({id}: any) => {
    return (
        <div id={id}>
            <div>
                <p>{React.createElement('p', null, '<SobreMim />')}</p>
                <p>Olá! Me chamo Maria Clara Tabosa.</p>
                <p>Sou uma apaixonada desenvolvedora web com habildiades tanto no Front End quanto no Back End. Formei-me na Kenzie Academy Brasil, 
                    onde aquiri expertise em desenvolvimento web Front End. Atualmente, também sou estudante de desenvolvimento Back End na mesma instituição.</p>
                <p>Minha paixão por programação vai além do meu curso de Ciência da Computação. Semanalmente, dedico tempo para desenvolver projetos pessoais, 
                    sempre buscando aprimorar minhas habilidades e me manter atualizada com as melhores práticas e tendências. </p>
                    <p>A combinação dos conhecimentos adquiridos no bootcamp de Desenvolvimento Web Full Stack com meu curso de Ciência da Computação me permite explorar diversas áreas da computação e aprimorar ainda mais minhas habilidades.</p>
                    <p>Estou sempre em busca de desafios empolgantes e oportunidades de aprendizado para continuar crescendo como profissional. </p>
            </div>
            <div>
                <p>{React.createElement('p', null, '<Skills />')}</p>
                <DiHtml5 />
                <DiCss3 />
                <DiJsBadge />
                <SiTypescript />
                <DiReact />
                <SiTailwindcss />
                <SiStyledcomponents />
                <DiNodejsSmall />
                <DiGit />
                <DiGithubBadge />
            </div>
        </div>
    )
}