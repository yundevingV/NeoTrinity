import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './pages/Signin'
import SignUp from './pages/Signup'
import Main from './pages/MainPage'
import Group from './pages/Group/Group'
import GroupNotice from './pages/Group/GroupNotice'
import GroupNoticeDetail from './pages/Group/GroupNoticeDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<SignIn />} />
        <Route path='/signup' element = {<SignUp />} />
        <Route path='/main' element = {<Main />} />
        <Route path='/group' element = {<Group />} />
        <Route path='/group/notice' element = {<GroupNotice />} />
        <Route path='/group/notice/detail/*' element = {<GroupNoticeDetail />} />

      </Routes>
    </div>
  );
}

export default App;
