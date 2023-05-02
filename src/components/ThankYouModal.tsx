import { Button } from "./Button";
import checkIcon from '../assets/images/icon-check.svg';
import './ThankYouModal.css';
import { Text, PledgeHeader } from "../assets/styles/StyledComponents";

export function ThankYouModal(props: {exitThankYou: () => void;}) {
    return (
        <div>
            <div className='overlay' onClick={props.exitThankYou}/>
            <div className='thank-you-container'>
                <img src={checkIcon} alt="check-icon" />
                <PledgeHeader>Thanks for your support!</PledgeHeader>
                <Text>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</Text>
                <Button label='Got it!' backgroundColor='#3CB3AB' hoverColor='#147A73' color='#FFFFFF' onClick={props.exitThankYou}/>
            </div>
        </div>
    )
}