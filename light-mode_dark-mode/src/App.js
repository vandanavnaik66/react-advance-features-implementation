import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Home} from './components/Home';
import { AboutUs} from './components/AboutUs';
import { ContactUs } from './components/ContactUs';
import { NavBar } from './components/NavBar';
import { Context } from './Context';

function App() {
  return (
    <Context>
   <BrowserRouter>
   <NavBar/>
   <Routes>
    <Route path='/' element={<Home/>} exact> </Route>
    <Route path='/about' element={<AboutUs/>}> </Route>
    <Route path='/contact' element={<ContactUs/>}> </Route>
   </Routes>
   </BrowserRouter>
   </Context>
  );
}

export default App;
