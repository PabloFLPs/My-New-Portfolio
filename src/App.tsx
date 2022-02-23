import React from "react"
import NavigationBar from "../src/components/NavigationBar"
import Hero from "../src/components/Hero"
import AboutMe from "../src/components/AboutMe"
import Projects from "../src/components/Projects"
import Contact from "../src/components/Contact"

function App() {
  return (
    <body className="bg-dark">
      <NavigationBar/>
      <Hero/>
      <AboutMe/>
      <Projects/>
      <Contact/>
    </body>
  )
}

export default App;
