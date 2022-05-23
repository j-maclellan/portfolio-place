import React, { useState } from 'react';
import './App.css';
import Projects from './components/Projects';
import About from './components/About';
import Nav from './components/Nav';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [pages] = useState([
    {
        name: 'about',
        id: '#about'
    },
    {
        name: 'projects',
        id: '#projects'
    },
    { 
        name: 'resume',
        id: '#resume'
    },
    {
        name: 'contact',
        id: '#contact'
    }
]);


// set state
const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Nav
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      ></Nav>

      <main>
        {/* Set to conditionally generated About, Contact, and projects pages */}
      {(()  => {
        switch (currentPage.name) {
          case 'about': 
            return <About/>
          case 'contact':
            return <ContactForm/>
          case 'resume':
            return <Resume/>
          case 'projects':
            return <Projects/>
          default:
            return <About/>
        }
      })()}
      </main>
      <Footer/>
    </div>
  );
}

export default App;
