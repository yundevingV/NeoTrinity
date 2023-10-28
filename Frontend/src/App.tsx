import React from 'react';
import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Main from './pages/MainPage'
import Group from './pages/Group/Group'
import GroupNotice from './pages/Group/GroupNotice'
import GroupNoticeDetail from './pages/Group/GroupNoticeDetail';

import Profile from './pages/Proifle/Profile';
import { GlobalStyle } from './styles/global';
import SideBar from './components/SideBar/SideBar';
import Reservation from './pages/Reservation/Reservation';


export default function App() {
  return (
    <div className="App">
      <GlobalStyle />

      <Routes>

        <Route path='/login' element = {<Login />} />
        <Route path='/signUp' element = {<SideBar content={<SignUp />} />} />
        <Route path='/' element = {<SideBar content={<Main/>}/>} />

        {/* profile */}
        <Route path='/profile' element = {<Profile />} />

        {/* group */}
        <Route path='/group' element = {<SideBar content={<Group />} />} />
        <Route path='/group/notice' element = {<GroupNotice />} />
        <Route path='/group/notice/detail/*' element = {<GroupNoticeDetail />} />
        {/* <Route path='/group/vote/' element = {<GroupVote />} />
        <Route path='/group/vote/detail/*' element = {<GroupVoteDetail />} /> */}

        {/* ㄱreservation */}
        <Route path='/reservation' element = {<SideBar content={<Reservation />} />} />
      

      </Routes>
    </div>
  )}