export default function UserInput(){
    return (
        <>
                <div id="user-input" className="input-group">
                    <label htmlFor="input-field">
                        <div>INITIAL INVESTMENT</div>
                        <input type="number"/>
                    </label>
                    <label htmlFor="input-field">
                        <div>ANNUAL INVESTMENT</div>
                        <input type="number"/>
                    </label>
                    <label htmlFor="input-field">
                        <div>EXPECTED RETURN</div>
                        <input type="number"/>
                    </label>
                    <label htmlFor="input-field">
                        <div>DURATION</div>
                        <input type="number"/>
                    </label>

                    
                </div>
        </>
    )
}