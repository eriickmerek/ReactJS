import {calculateInvestmentResults, formatter} from "../util/investment.js";

export default function Results({ formValues }) {
    const investmentResults = calculateInvestmentResults(formValues);
    //Invested Capital: Initial Investment (user input) and add the Annual Investment (user input) each year.
    let investedCapital = formValues.initialInvestment;
    //Total Interest: Sums the Interest (Year) each year.
    let totalInterest = 0;

    return <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invented Capital</th>
            </tr>
        </thead>
        <tbody>
            {investmentResults.map((row, rowIndex) => {
                investedCapital += row.annualInvestment;
                totalInterest += row.interest;
                
                return <tr key={rowIndex}>
                    <td>{row.year}</td>
                    <td>{formatter.format(row.valueEndOfYear)}</td>
                    <td>{formatter.format(row.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(investedCapital)}</td>
                </tr>
            })}
        </tbody>
    </table>
}