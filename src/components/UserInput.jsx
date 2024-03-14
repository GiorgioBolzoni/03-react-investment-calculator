
export default function UserInput({onChangeComponent, userInputComponent}){
    

    
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>INITIAL INVESTMENT</label>
                    <input 
                    type="number"
                    value={userInputComponent.initialInvestment}
                    onChange={(event) => onChangeComponent('initialInvestment', event.target.value)}
                    required
                    />
                </p>
                <p>
                    <label>ANNUAL INVESTMENT</label>
                    <input 
                    type="number"
                    value={userInputComponent.annualInvestment}
                    onChange={(event) => onChangeComponent('annualInvestment', event.target.value)}
                    required
                    />
                </p>
                <p>
                    <label>EXPECTED RETURN</label>
                    <input 
                    type="number"
                    value={userInputComponent.expectedReturn}
                    onChange={(event) => onChangeComponent('expectedReturn', event.target.value)}
                    required
                    />
                </p>
                <p>
                    <label>DURATION</label>
                    <input 
                    type="number"
                    value={userInputComponent.duration}
                    onChange={(event) => onChangeComponent('duration', event.target.value)}
                    required
                    />
                </p>
            </div>
        </section>
    )
}