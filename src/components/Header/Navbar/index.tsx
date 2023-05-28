import { Link } from "react-scroll";

export const Navbar = () => {
    return(
        <nav>
            <Link activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500} >Início</Link>
            <Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500} >Sobre mim</Link>
            <Link activeClass="active" to="curriculum" spy={true} smooth={true} offset={-70} duration={500} >Currículo</Link>
            <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={500}>Projetos</Link>
            <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500} >Contato</Link>
        </nav>
    )
}