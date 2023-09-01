import React, { useContext } from 'react'
import NavigationBar from '../../component/organism/navbar';
import './main.css';
import AddCard from '../../component/organism/addCard/addCard';
import { CardContext } from '../../context/cardContext';
import AddCardPopup from '../../component/organism/addCardPopup/addCardPopup';
import TodoCard from '../../component/organism/todoCard/todoCard';

const MainPage = () => {
  const { createCardPopup } = useContext(CardContext);
  console.log(createCardPopup)
  return (
    <div className='main-page-container'>
      <div className='navbar-container'>
        <NavigationBar />
      </div>
      <div className='todo-card-wrap'>
        <TodoCard cardTitle='CardTitle'/>
        <AddCard />
      </div>
      {/* {createCardPopup && <AddCardPopup />} */}
    </div>
  )
}
export default MainPage;