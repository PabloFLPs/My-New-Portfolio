import React from "react"
import NavigationBar from "../src/components/NavigationBar"
import Hero from "../src/components/Hero"
import AboutMe from "../src/components/AboutMe"

function App() {
  return (
    <body className="bg-dark">
      <NavigationBar/>
      <Hero/>
      <AboutMe/>
    </body>
  )
}

export default App;
