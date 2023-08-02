import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './pages/Signin'
import SignUp from './pages/Signup'
import Main from './pages/MainPage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<SignIn />} />
        <Route path='/signup' element = {<SignUp />} />
        <Route path='/main' element = {<Main />} />
      </Routes>
    </div>
  );
}

export default App;
