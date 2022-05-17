import logo from './logo.svg';
import './App.css';
import Header from '../src/components/Header';
// import Project from './components/Project';
import About from './components/About';
import Nav from './components/Nav';
import ContactForm from './components/Contact';

function App() {
  return (
    <div>
      <Header></Header>
      <Nav>
        
      </Nav>
      <main>
        {/* Set to conditionally generated About, Contact, and Portfolio pages */}
      <ContactForm></ContactForm>
      <About></About>
      </main>
    </div>
  );
}

export default App;
