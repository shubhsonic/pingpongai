import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Chat from './Chat/Chat';
import "./dashboard.css";
import LoadingSpinner from './LoadingSpinner';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const sessionEstablished = useSelector(state => state.dashboard.sessionEstablished)
  return (
    <div className='dashboard_container'>
      <Sidebar/>
      <Chat />
      {!sessionEstablished && <LoadingSpinner /> }
    </div>
  )
}

export default Dashboard