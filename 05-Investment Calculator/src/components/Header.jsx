import investmentCalcLogo from "../assets/investment-calculator-logo.png";

export default function Header() {
    return <header id="header">
        <img src={investmentCalcLogo} alt="Investment Calculator Logo" />
        <h1>React Investment Calculator</h1>
    </header>
}