import './App.css'
import Login from './Components/Login/Login'
import Sigup from './Components/signup/Sigup';

function App() {
  const signed = true;

  return (
    <div className='App'>
      if (signed) {
        <Login />
        
      }else{
        <Sigup />
      }
    </div>


  )
}

export default App
