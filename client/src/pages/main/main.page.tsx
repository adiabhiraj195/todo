import React, { useContext, useEffect } from 'react'
import NavigationBar from '../../component/organism/navbar';
import './main.css';
import AddCard from '../../component/organism/addCard/addCard';
import { CardContext } from '../../context/cardContext';
import TodoCard from '../../component/organism/todoCard/todoCard';
import { AuthContext } from '../../context/authContext';
import Login from '../login/login.page';
import RegisterPage from '../register/register.page';
import useData from '../../hooks/useData';

const MainPage = () => {
  const { createCardPopup } = useContext(CardContext);
  const { toggleLogin, toggleSignin } = useContext(AuthContext);
  const { getUserData } = useData();
  // console.log(createCardPopup)
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <div className='main-page-container'>
      <div className='navbar-container'>
        <NavigationBar />
      </div>
      <div className='todo-card-wrap'>
        <TodoCard cardTitle='CardTitle' />
        <AddCard />
      </div>
      {/* {createCardPopup && <AddCardPopup />} */}
      {toggleLogin && <Login />}
      {toggleSignin && <RegisterPage />}
    </div>
  )
}
export default MainPage;