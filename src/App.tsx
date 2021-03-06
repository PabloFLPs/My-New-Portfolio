import React from "react"
import NavigationBar from "../src/components/NavigationBar"
import Hero from "../src/components/Hero"
import AboutMe from "../src/components/AboutMe"
import Projects from "../src/components/Projects"
import Experience from "./components/Experience"
import Contact from "../src/components/Contact"
import Footer from "../src/components/Footer"

function App() {
  return (
    <body className="bg-dark">
      <NavigationBar/>
      <Hero/>
      <AboutMe/>
      <Projects/>
      <Experience/>
      <Contact/>
      <Footer/>
    </body>
  )
}

export default App;
