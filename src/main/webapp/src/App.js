import React,{createContext,useState} from 'react'
import Navbar from './components/Navbar';
import Formfield from './components/Formfield';
import Booksget from './components/Booksget';
import Onlybooks from './components/Onlybooks';
import Bookclass from './components/Bookclass';
import Customerget from './components/Customerget';
import PostForm from './components/PostForm';
import ComponentsA from './components/ComponentsA';
import ComponentsB from './components/ComponentsB';
import './App.css';

export const store = createContext();

const App = () => {
    const [data,setData] = useState(0);
  return (
    <store.Provider value={[data,setData]} >
    <center>
    <div className="App">
        <Navbar />
        <h1> ReactJS SpringBoot </h1>
        <Formfield />
        <Booksget />
        <Onlybooks />
        <Bookclass />
        <Customerget />
        <PostForm />
        <ComponentsA />
        <ComponentsB />
        <button style={{flex:1, marginRight: 10,padding: 10}}  type="button" class="btn btn-primary" onClick={() => setData(data+1)}>Increment</button>
        <button style={{flex:1, marginRight: 10,padding: 10 }} type="button" class="btn btn-primary" onClick={() => setData(data-1)}>Decrement</button>
    </div>
    </center>
    </store.Provider>
  );
}

export default App;
