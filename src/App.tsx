import { useState } from 'react';
import './assets/styles/App.css';
import { AboutProjectSection } from './components/AboutProject';
import { FundraiseSection } from './components/FundraiseSection';
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
  Header (large screen) - left logo, 3 links on right (links underline when hovered)
  Header (small screen) - left logo, hamburger button containing 3 links on right when clicked
  Minimum pledge validation in modal
  Allow pre-selecting of modal items when select reward is clicked
  Disable radio for out of stock pledges
  Run Accessibility scanner on project
  Allow tab-based navigation
  Stop body scrolling when modal is open
  Mobile Friendly:
    - Header
    - Content Header section
    - Fundraising section
    - about project section
    - modal
    - thank you modal
  */

  return (
    <div className='app'>
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
