import { Text, PledgeHeader, IPledge } from "./Pledge";
import { ModalPledge } from "./ModalPledge";
import closeModalIcon from '../assets/images/icon-close-modal.svg';
import { useState } from "react";
import './Modal.css';

export const pledges: IPledge[] = [
    {
        name: 'Pledge with no reward',
        minimumCost: 0,
        pledgesLeft: undefined,
        description: `Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.`
    },
    {
        name: 'Bamboo Stand',
        minimumCost: 25,
        pledgesLeft: 101,
        description: `You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.`
    },
    {
        name: 'Black Edition Stand',
        minimumCost: 75,
        pledgesLeft: 64,
        description: `You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.`
    },
    {
        name: 'Mahogony Special Edition',
        minimumCost: 200,
        pledgesLeft: 0,
        description: `You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list.  Shipping is included.`
    },
]

export function Modal(props: {closeModal: any, openThankYou: any}) {
    const [selectedPledge, setSelectedPledge] = useState<number>();

    function handlePledgeClick(index: number) {
        selectedPledge === index ? setSelectedPledge(undefined) :  setSelectedPledge(index);
    }

    function handleContinueClick() {
        props.closeModal();
        props.openThankYou();
    }

    return (
        <div>
            <div className='overlay' onClick={props.closeModal}/>
            <div className='modal content-section'>
                <img 
                    src={closeModalIcon} 
                    alt="exit modal" 
                    className="close-modal"
                    onClick={props.closeModal}
                />
                <PledgeHeader>Back this project</PledgeHeader>
                <Text>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</Text>
                {pledges.map((pledge, index) => {
                    return <ModalPledge 
                        key={pledge.name}
                        pledge={pledge} 
                        index={index} 
                        handleClick={handlePledgeClick}
                        isSelected={selectedPledge === index}
                        handleContinue={handleContinueClick}
                    />
                })}
            </div>
        </div>
    )
}