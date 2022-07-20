import './App.css';
import NavBar from './Components/NavBar/navbar.js';
import Footer from './Components/Footer/footer.js';
import Login from './Components/Login/login.js';
import './index.css';
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import "primereact/resources/themes/tailwind-light/theme.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <div className='content'>
        <BrowserRouter>
        
          <NavBar>
          </NavBar>
          <Routes> 

              <Route  path='/' element={<Login/>}/>

          </Routes>       
          <Footer>
          </Footer>
        </BrowserRouter>

      </div>
  );
}

export default App;
