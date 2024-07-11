export default function Input({ name, ID, value, onInputChange }) {

    return <p>
        <label htmlFor={ID}>{name}</label>
        <input 
            type="number" 
            id={ID} 
            value={value}
            min="0" 
            onChange={(event) => onInputChange(ID,event.target.value)}
            required 
        />
    </p>
}