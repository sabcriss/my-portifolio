import NavBar from "../../assets/Images/Components/NavBar/navbar"
import Hero from "./sections/Hero/hero"
import Skills from "./sections/Skills/skills"


const Home: React.FC = () => {
  return (
    <>
    <NavBar/>
      <Hero />
      <Skills />
    </>
  )
}

export default Home
