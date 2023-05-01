import { Text } from "./Pledge";
import './FundraiseSection.css';
import { GoalBar } from "./GoalBar";

export function FundraiseSection() {
    return (
        <div className='fundraise content-section'>
            <div className='fundraise-numbers'>
                <div>
                    <h1>$89,914</h1>
                    <Text>of $100,000 backed</Text>
                </div>
                <hr />
                <div>
                    <h1>5007</h1>
                    <Text>total backers</Text>
                </div>
                <hr />
                <div>
                    <h1>56</h1>
                    <Text>days left</Text>
                </div>
            </div>
            <GoalBar goal={100000} progress={89914} />
        </div>
    )
}