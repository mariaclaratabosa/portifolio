import { About } from './components/About'
import { Contact } from './components/Contact'
import { Curriculum } from './components/Curriculum'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Projects } from './components/Projects'

function App() {
return(
  <>
  <Header />
  <Home id="home" />
  <About id="about" />
  <Curriculum id="curriculum" />
  <Projects id="projects" />
  <Contact id="contact" />
  </>
)
}

export default App
