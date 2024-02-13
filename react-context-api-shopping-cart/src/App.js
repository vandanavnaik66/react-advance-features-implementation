import './App.css';
import {BrowserRouter, Route,Routes} from "react-router-dom"
import { Home } from './components/Home';
import { Cart } from './components/Cart';
import {Header} from './components/Header'

function App() {
  return (
 <BrowserRouter>

 <Header />
 
  <Routes>

  <Route path='/' element={<Home  />} exact ></Route>  

  {/* dont use component instead of element (in older component was using) and inside curly bracket add component name along with </>
  otherwise it don't work  */}

  <Route path='/cart' element ={<Cart />} exact></Route>

  </Routes>

 </BrowserRouter>
  );
}

export default App;
