import Navbar from './components/Navbar';
import Formfield from './components/Formfield';
import Booksget from './components/Booksget';
import Onlybooks from './components/Onlybooks';
import './App.css';


const App = () => {

  return (
    <div className="App">
        <Navbar />
        <h1> ReactJS SpringBoot </h1>
        <Formfield />
        <Booksget />
        <Onlybooks />
    </div>

  );
}

export default App;
