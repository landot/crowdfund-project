import { Text, PledgeHeader } from "./Pledge";
import { Pledge } from "./Pledge";
import './AboutProject.css';
import { pledges } from "../assets/data/pledgeData";

export function AboutProjectSection(props: {handleModalToggle: any}) {
    return (
        <div className='about-project-section content-section'>
            <PledgeHeader>About this project</PledgeHeader>
            <Text>
                The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
                <br />
                <br />
                Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.
            </Text>
            {pledges.filter(pledge => pledge.pledgesLeft !== undefined).map((pledge) => {
                return <Pledge key={pledge.name} pledge={pledge} toggleModal={props.handleModalToggle}/>
            })}
        </div>
    )
}