import './App.css';
import NavBar from './Components/NavBar/navbar.js';
import Footer from './Components/Footer/footer.js';
import Login from './Components/Login/login.js';
import './index.css';
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import "primereact/resources/themes/tailwind-light/theme.css";

function App() {
  return (
      <>
        <NavBar>
        </NavBar>
          <div className='content'>
            <Login/>
          </div>
        <Footer>
        </Footer>
      </>
  );
}

export default App;
