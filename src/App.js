
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import NoteState from './context/notes/NoteState';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <NoteState>
        <Router>
          <Navbar/>
              <Routes>
                  <Route exact path='/' element={<Home/>}/>
                  <Route exact path='/about' element={<About/>}/>
                  <Route path='*' element={<h1>Error ! Page Not found</h1>}/>
                  {/*this is default Route it runs when page doesnot matches any of the routes*/}
              </Routes>
            <Footer/>
        </Router> 
      </NoteState>
    </>
  );
}

export default App;
