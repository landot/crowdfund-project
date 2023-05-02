import { IPledge } from "./Pledge";
import styled from 'styled-components';
import { Text, PledgeMessage, PledgeLeftHeader } from "./Pledge";
import './ModalPledge.css';
import { useState } from "react";
import { Button } from "./Button";

export const EnterPledgeInput = styled.input`
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
`

export function ModalPledge(props: {
        pledge: IPledge, 
        isSelected: boolean, 
        index: number, 
        handleClick: any, 
        handleContinue: any
    }) {
    const [pledgeAmount, setPledgeAmount] = useState(0);
    const [showError, setShowError] = useState(false);
    const pledgeActive =  props.pledge.pledgesLeft != 0;
    const pledgeHasLimit = props.pledge.pledgesLeft !== undefined;

    function handlePledgeUpdate(e:  React.ChangeEvent<HTMLInputElement>) {
        setPledgeAmount(Math.round(parseFloat(e.target.value) * 100) / 100);
    }

    function handleContinueClick() {
        const pledgeIsInvalid = pledgeAmount < props.pledge.minimumCost || pledgeAmount === 0;
        setShowError(pledgeIsInvalid);
        if(!pledgeIsInvalid) {
            props.handleContinue();
        }
    }


    return (
        <div className={`modal-pledge ${!pledgeActive ? 'out-of-stock': ''}`}>
            <div className="modal-pledge-description" onClick={() => props.handleClick(props.index)}>
                <input 
                    type="radio" 
                    name={props.pledge.name}
                    className="modal-radio" 
                    onClick={props.handleClick}
                    checked={pledgeActive ? props.isSelected: false}
                    disabled={!pledgeActive}
                    aria-label={`click to ${props.isSelected ? 'de-select' : 'select'} ${props.pledge.name}`}
                />
                <div className='modal-pledge-header'>
                    <div className='modal-pledge-header-left'>
                        <p>{props.pledge.name}</p>
                        {pledgeHasLimit && <PledgeMessage>Pledge ${props.pledge.minimumCost} or more</PledgeMessage>}
                    </div>
                    {pledgeHasLimit && 
                        <div className='pledge-left-text'>
                            <PledgeLeftHeader>{props.pledge.pledgesLeft}</PledgeLeftHeader>
                            <Text>left</Text>
                        </div>
                    }

                </div>
                <Text>{props.pledge.description}</Text>
            </div>
            {props.isSelected && pledgeActive &&
            <div>
                <hr />
                <div className='set-pledge-section'>
                    <Text>Enter your pledge</Text>
                    <div className="set-pledge-section-right">
                        <div className='pledge-input-section'>
                            <input className='pledge-input' type='number' onChange={handlePledgeUpdate}/>
                            <p className='pledge-currency-symbol'>$</p>
                        </div>
                        <Button     
                            color='#FFFFFF'
                            label='Continue'
                            backgroundColor='#147A73'
                            onClick={handleContinueClick}
                        />
                    </div>
                </div>
                {showError &&
                    <p className="pledge-validation-error">entered value is lower than minimum pledge amount</p>
                }
            </div>
            }
        </div>
    )
}