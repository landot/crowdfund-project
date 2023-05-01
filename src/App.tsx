import { useState } from 'react';
import './assets/styles/App.css';
import { AboutProjectSection } from './components/AboutProject';
import { Button } from './components/Button';
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
  DONE: Button - base button (green with darker green hover)
  DONE: Button - back this project (opens modal)
  DONE: Button - Select Reward (opens modal)
  DONE: Button - Bookmark button (shrinks)
  DONE: Icon - Bookmark icon (exists in images)
  DONE: Bar - tracks percentage of crowdfunding goal
  DONE: Base Box Container - white with rounded edges
  DONE: Reward Box - rounded gray border, pledge amount, number left, Select Reward button
  DONE: Pop up modal - x button, some text, list of pledge options with radio buttons
  DONE: Modal pledge option - radio button, pledge amount, number left, description. When clicked: allows you to enter a pledge amount with continue button
  DONE: Modal thank you page - icon, thanks message, got it button
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
