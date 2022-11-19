import Navbar from './components/Navbar';
import Formfield from './components/Formfield';
import Booksget from './components/Booksget';
import Onlybooks from './components/Onlybooks';
import Bookclass from './components/Bookclass';
import Customerget from './components/Customerget';
import PostForm from './components/PostForm';
import './App.css';

const App = () => {

  return (
    <div className="App">
        <Navbar />
        <h1> ReactJS SpringBoot </h1>
        <Formfield />
        <Booksget />
        <Onlybooks />
        <Bookclass />
        <Customerget />
        <PostForm />
    </div>

  );
}

export default App;
