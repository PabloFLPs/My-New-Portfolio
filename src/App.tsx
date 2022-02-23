import React from "react"
import NavigationBar from "../src/components/NavigationBar"
import Hero from "../src/components/Hero"
import AboutMe from "../src/components/AboutMe"
import Projects from "../src/components/Projects"

function App() {
  return (
    <body className="bg-dark">
      <NavigationBar/>
      <Hero/>
      <AboutMe/>
      <Projects/>
    </body>
  )
}

export default App;
