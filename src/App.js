import WelcomeSection from "./components/WelcomeSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from './components/Footer'
import Modal from './components/Modal'
import { useState } from "react";

function App() {
  const [lang, setLang] = useState('EN')
  const [modalDisplay, setModalDisplay] = useState('none')
  const [projectModal, setProjectModal] = useState({})

  return (
    <div className="App">
      <Navbar lang={lang} setLang={setLang}/>

      <div style={{direction: lang === 'AR' ? 'rtl' : 'ltr'}}>
        <WelcomeSection lang={lang}/>
        <AboutSection lang={lang} />
        <ProjectsSection setProjectModal={setProjectModal} lang={lang} setModalDisplay={setModalDisplay}/>
        <ContactSection lang={lang}/>
      </div>

      <Footer/>
      <Modal modalDisplay={modalDisplay} lang={lang} setModalDisplay={setModalDisplay} projectModal={projectModal} setProjectModal={setProjectModal}/>
    </div>
  );
}

export default App;
