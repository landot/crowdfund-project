import { ModalPledge } from "./ModalPledge";
import closeModalIcon from '../assets/images/icon-close-modal.svg';
import { useState } from "react";
import './Modal.css';
import { pledges } from "../assets/data/pledgeData";
import { PledgeHeader, Text } from "../assets/styles/StyledComponents";

export function Modal(props: {closeModal: () => void, openThankYou: () => void}) {
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