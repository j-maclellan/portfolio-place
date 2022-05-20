import logo from './logo.svg';
import './App.css';
import Header from '../src/components/Header';
import Projects from './components/Projects';
import About from './components/About';
import Nav from './components/Nav';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Header/>
      <Nav>
        
      </Nav>
      <main>
        {/* Set to conditionally generated About, Contact, and Portfolio pages */}
      <About></About>
      <Projects></Projects>
      <Resume></Resume>
      <ContactForm></ContactForm>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
