import React from 'react';

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Main from './pages/MainPage'
import Group from './pages/Group/Group'
import GroupNotice from './pages/Group/GroupNotice'
import GroupNoticeDetail from './pages/Group/GroupNoticeDetail';
import GroupVote from './pages/Group/GroupVote';
import GroupVoteDetail from './pages/Group/GroupVoteDetail';
import Profile from './pages/Proifle/Profile';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path='/' element = {<Login />} />
        <Route path='/signUp' element = {<SignUp />} />
        <Route path='/main' element = {<Main />} />

        {/* profile */}
        <Route path='/profile' element = {<Profile />} />

        {/* group */}
        <Route path='/group' element = {<Group />} />
        <Route path='/group/notice' element = {<GroupNotice />} />
        <Route path='/group/notice/detail/*' element = {<GroupNoticeDetail />} />
        <Route path='/group/vote/' element = {<GroupVote />} />
        <Route path='/group/vote/detail/*' element = {<GroupVoteDetail />} />

      </Routes>
    </div>
  );
}

export default App;
