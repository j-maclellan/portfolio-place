import logo from './logo.svg';
import './App.css';
import Header from '../src/components/Header';
// import Project from './components/Project';
import About from './components/About';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Header></Header>
      <Nav>
        
      </Nav>
      <main>
      <About></About>
      </main>
    </div>
  );
}

export default App;
