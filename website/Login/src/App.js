import './App.css';
import Navbar from './Components/Navbar.jsx';
import './Components/Navbar.css';

function Login () {

return(
  <> 
    <Navbar/>
    {}
    <div className = 'card'>

        <div>
        <button type = 'button'>Email</button>
        </div>
        <div>
        <button type = 'button'>Password</button>
        </div>
        <div>
        <button type = 'button'>Confirm Password</button>
        </div>
        <div>
        <button type = 'button'>Login</button>
        </div>
        <div>
        <button type = 'button'>Register</button>
        </div>
      </div>
     </>
  );
}

export default Login;
