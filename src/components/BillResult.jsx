export default function BillResult({billData}) {
    if (!billData || Object.keys(billData).length === 0) {
        return null;
    }

    const totalKwh = +billData.totalKwh;
    const totalPrice = +billData.totalPrice;

    // calculate current kwh - previous kwh of each room
    const kwhRooms = billData.kwhPeople.map((people) => (+people.currKwh - +people.prvKwh));

    // calculate common area kwh
    const totalKwhRooms = kwhRooms.reduce((accu, curr) => (accu + curr), 0);
    const commonAreaKwh = totalKwh - totalKwhRooms;

    // calculate kwh used for each person and price
    const kwhByPersons = kwhRooms.map((value) => value + commonAreaKwh / kwhRooms.length);
    const priceByPersons = kwhByPersons.map((value) => value / totalKwh * totalPrice);
    
    return (
        <footer className="bill-result container mb-5">
            <div>
                <hr/><h1>Results</h1>
                <p className="fs-5 mb-5">Common Area Total kWh used: {commonAreaKwh.toFixed(2)}</p>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>Room Number / Name</th>
                        <th>kWh Used (Own Room + Common Area)</th>
                        <th>Price (RM)</th>
                    </tr>
                </thead>

                <tbody className="table-group-divider">
                    {billData.kwhPeople.map((_, i) => (
                        <tr key={i}>
                            <td>{billData.kwhPeople[i].name}</td>
                            <td>{kwhByPersons[i].toFixed(2)}</td>
                            <td>{priceByPersons[i].toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>

                <tfoot className="table-group-divider">
                    <tr>
                        <td></td>
                        <td>Total: {totalKwh}</td>
                        <td>Total: {totalPrice}</td>
                    </tr>
                </tfoot>
            </table>
        </footer>
    )
}