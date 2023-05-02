import { Button } from './Button';
import styled from 'styled-components';
import './Pledge.css';
import { IPledge } from '../assets/data/pledgeData';

export const PledgeHeader = styled.h2`
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
`

export const PledgeLeftHeader = styled.h2`
    font-weight: 700;
    font-size: 32px;
`

export const PledgeMessage = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    color: #3CB3AB;
`

export const Text = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    color: #7A7A7A;
`

export function Pledge(props: {pledge: IPledge, toggleModal: any}) {
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