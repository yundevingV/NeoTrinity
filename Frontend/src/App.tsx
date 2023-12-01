import React from 'react';
import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import MainPage from './pages/MainPage'
import Group from './pages/Group/board/Group'
import GroupAdd from './pages/Group/board/GroupAdd';
import GroupNotice from './pages/Group/board/GroupNotice'
import GroupNoticeDetail from './pages/Group/board/GroupNoticeDetail';

import Profile from './pages/Proifle/Profile';
import { GlobalStyle } from './styles/global';
import SideBar from './components/SideBar/SideBar';
import Reservation from './pages/Reservation/Reservation';
import VoteDetail from './pages/Group/vote/VoteDetail';
import VoteList from './pages/Group/vote/VoteLIst';


export default function App() {
  return (
    <div className="App">
      <GlobalStyle />

      <Routes>

        <Route path='/' element = {<Login/>} />
        <Route path='/signUp' element = {<SignUp/>} />
        <Route path='/main' element = {<SideBar content={<MainPage/>}/>} />

        {/* profile */}
        <Route path='/profile' element = {<SideBar content={<Profile/>}/>} />

        {/* group */}
        <Route path='/group' element = {<SideBar content={<Group />} />} />

        <Route path='/group/notice' element = {<SideBar content={<GroupNotice />} />} />
        <Route path='/group/notice/detail/:id' element = {<SideBar content={<GroupNoticeDetail />} />} />

        <Route path='/group/vote/list' element = {<SideBar content={<VoteList />} />} /> 
        <Route path='/group/vote/detail/*' element = {<SideBar content={<VoteDetail />} />} /> 
        

        {/* ㄱreservation */}
        <Route path='/reservation' element = {<SideBar content={<Reservation />} />} />
      

      </Routes>
    </div>
  )}