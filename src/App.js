// import logo from './logo.svg';         -- Current not using
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Skills from './components/Skills'
import Services from './components/Services'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Landing />
      <Skills />
      <Services />
      <Project/>
      <Contact />
      <Footer/>
    </>
  );
}

export default App;