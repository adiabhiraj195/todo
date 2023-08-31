import React from 'react'
import NavigationBar from '../../component/organism/navbar';
import './main.css';
import AddCard from '../../component/organism/addCard/addCard';

const MainPage = () => {
  return (
    <div className='main-page-container'>
      <div className='navbar-container'>
        <NavigationBar />
      </div>
      <div className='todo-card-wrap'>
        <AddCard />
      </div>
    </div>
  )
}
export default MainPage;