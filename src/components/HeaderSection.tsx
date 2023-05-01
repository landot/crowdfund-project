import { BookmarkButton } from "./BookmarkButton";
import { Button } from "./Button";
import { Text, PledgeHeader } from "./Pledge";
import './HeaderSection.css';
import logo from '../assets/images/logo-mastercraft.svg';

export function HeaderSection(props: {handleOpenModal: any}) {
    return (
        <div className='content-header content-section'>
            <img className='logo' src={logo} alt="logo" />
            <div className="header-description">
                <PledgeHeader>Mastercraft Bamboo Monitor Riser</PledgeHeader>
                <Text>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</Text>
            </div>
            <div className='header-actions'>
                <Button 
                    label={"Back this project"}
                    color='#FFFFFF'
                    backgroundColor='#3CB3AB'
                    hoverColor='#147A73'
                    onClick={props.handleOpenModal}
                />
                <BookmarkButton isMobile={false} />
            </div>
      </div>
    )
}