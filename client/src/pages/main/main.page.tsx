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
  const { cards } = useContext(CardContext);
  const { toggleLogin, toggleSignin } = useContext(AuthContext);
  const { getUserData } = useData();
  const accessToken = localStorage.getItem('Token');
  // console.log(createCardPopup)
  useEffect(() => {
    if(accessToken == null) return;
    getUserData( accessToken);
  }, []);
  return (
    <div className='main-page-container'>
      <div className='navbar-container'>
        <NavigationBar />
      </div>
      <div className='todo-card-wrap'>
        {
          cards?.map((card) => {
            return (
              <div className='todo-card-key-container' key={card._id}>
                <TodoCard cardTitle={card.cTitle} tasks={card.tasks} cardId={card._id} />
              </div>
            )
          })
        }
        <AddCard />
      </div>
      {/* {createCardPopup && <AddCardPopup />} */}
      {toggleLogin && <Login />}
      {toggleSignin && <RegisterPage />}
    </div>
  )
}
export default MainPage;