import { useState } from 'react';
import './assets/styles/App.css';
import { AboutProjectSection } from './components/AboutProject';
import { FundraiseSection } from './components/FundraiseSection';
import { Header } from './components/Header';
import { HeaderSection } from './components/HeaderSection';
import { Modal } from './components/Modal';
import { ThankYouModal } from './components/ThankYouModal';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  function handleModalToggle() {
    setShowModal(prev => !prev);
  }

  function handleThankYouToggle() {
    setShowThankYou(prev => !prev);
  }
  /*
  Fix bad types in code (mostly the action functions)
  move styled components to file
  */

  return (
    <div className={'app'}>
      <Header />
      <div className='content'>
        <HeaderSection handleOpenModal={handleModalToggle}/>
        <FundraiseSection />
        <AboutProjectSection handleModalToggle={handleModalToggle} />
        {showModal && <Modal closeModal={handleModalToggle} openThankYou={handleThankYouToggle}/>}
        {showThankYou && <ThankYouModal exitThankYou={handleThankYouToggle}/>}
      </div>
    </div>
  )
}

export default App
