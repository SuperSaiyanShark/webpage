import Header from "./components/Header"
import About from "./components/About"
import Skills from "./components/Skills"
import Education from "./components/Education"
import Contact from "./components/Contact"
import ContactList from "./components/ContactList"
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
  ];
  const education = [
    {
      year:"2028",
      program:"College",
      school:"USTP-CDO"
    },
    {
      year:"2024",
      program:"Senior High School",
      school:"USTP-CDO"
    },
    {
      year:"2022",
      program:"High School",
      school:"Corpus Christi School"
    },
    {
      year:"2018",
      program:"Grade School",
      school:"Corpus Christi School"
    },
  ]
  return (
    
  <>
  <div className={darkMode ? "dark-mode-bg" : ""}>
  <button onClick={() => setDarkMode(!darkMode)}>
  Toggle Dark Mode
  </button>

  <Header />
  <About />
  <Skills skills = {skills}/>
  <Education education = {education}/>
  <Contact />
  <ContactList />
  </div>

  </>
  );
  }
  export default App;