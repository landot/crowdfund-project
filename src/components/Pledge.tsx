import { Button } from './Button';
import './Pledge.css';
import { IPledge } from '../assets/data/pledgeData';
import { PledgeHeader, PledgeMessage, PledgeLeftHeader, Text } from '../assets/styles/StyledComponents';



export function Pledge(props: {pledge: IPledge, toggleModal: () => void;}) {
    const pledgeActive = props.pledge.pledgesLeft && props.pledge.pledgesLeft > 0;

    return (
        <div className={`pledge-container ${!pledgeActive ? 'out-of-stock': ''}`}>
            <div className='pledge-header'>
                <PledgeHeader>{props.pledge.name}</PledgeHeader>
                <PledgeMessage>Pledge ${props.pledge.minimumCost} or more</PledgeMessage>
            </div>
            <Text>{props.pledge.description}</Text>
            <div className='pledge-bottom'>
                <div className='pledges-left-text'>
                    <PledgeLeftHeader>{props.pledge.pledgesLeft}</PledgeLeftHeader>
                    <Text>left</Text>
                </div>
                {
                    pledgeActive ? 
                    <Button 
                        color='#FFFFFF'
                        label='Select Reward'
                        backgroundColor='#3CB3AB'
                        hoverColor='#147A73'
                        onClick={props.toggleModal}
                    /> : 
                    <Button 
                        color='#FFFFFF'
                        label='Out of stock'
                        backgroundColor='#979797'
                    />         
                }
            </div>
        </div>
    )
}