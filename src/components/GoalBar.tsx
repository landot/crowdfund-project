import './GoalBar.css';


export function GoalBar(props: {goal: number, progress: number}) {
    const goalPercentMet = props.progress / props.goal * 100; 
    return (
        <div className="goal-bar-container">
            <div className="bar">
                <div className="progress-bar" style={{
                    width: `${goalPercentMet}%`
                }}/>
            </div>
        </div>
    )
}