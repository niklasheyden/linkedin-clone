import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { selectUser } from './features/userSlice';
import Login from './Login';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';

function App() {
  const user = useSelector(selectUser)


  return (
    <div className="app">

      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Sidebar />
          <Feed />
          {/* Widgets */}
        </div>
      )}


    </div>
  );
}

export default App;
