export default function InfoHeader() {
    return (
        <header className="info-header container mt-5 mb-5">
            <h1 className="mb-3">Electricity Bill Calculator</h1>
            
            <ul className="list-group list-group-flush">
                <li className="list-group-item">This calculator just uses proportion to calculate the price to be paid by each person.</li>
                <li className="list-group-item">Formula = (kWh used by the person / Total kWh used) * Total Price</li>
                <li className="list-group-item">If your total kWh used is more than like 1000kWh, this calculator is not accurate. Dont use it.</li>
            </ul>
        </header>
    );
}