import NavBar from "../../assets/Images/Components/NavBar/navbar"
import Hero from "./sections/Hero/hero"
import Resume from "./sections/Resume/resume"
import Skills from "./sections/Skills/skills"
import Projects from "./sections/Projects/projects"
import Contact from "./sections/Contact/contact"
import Footer from "./sections/Footer/footer"


const Home: React.FC = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Resume />
      <Skills />
      <Projects /> 
      <Contact  />
      <Footer/>
    </>
  )
}

export default Home;
