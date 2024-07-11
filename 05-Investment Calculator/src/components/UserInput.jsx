////////// Components //////////
import Input from "./Input";

export default function UserInput({ onInputChange, formValues }) {

    return <section id="user-input">
        <div className="input-group">
            <Input 
                name="Initial Investment" 
                ID="initialInvestment" 
                value={formValues.hasOwnProperty('initialInvestment') ? formValues.initialInvestment : undefined} 
                onInputChange={onInputChange}
            />
            <Input 
                name="Annual Investment" 
                ID="annualInvestment" 
                value={formValues.hasOwnProperty('annualInvestment') ? formValues.annualInvestment : undefined}
                onInputChange={onInputChange}
            />
        </div>
        <div className="input-group">
            <Input 
                name="Expected Return" 
                ID="expectedReturn" 
                value={formValues.hasOwnProperty('expectedReturn') ? formValues.expectedReturn : undefined} 
                onInputChange={onInputChange}
            />
            <Input 
                name="Duration" 
                ID="duration" 
                value={formValues.hasOwnProperty('duration') ? formValues.duration : undefined} 
                onInputChange={onInputChange}
            />
        </div>
    </section>
}