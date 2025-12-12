import { useEffect, useState } from "react";

export default function BillInput({numPeople, setBillData}) {
    const [inputValue, setInputValue] = useState({
        totalKwh: "",
        totalPrice: "",
        kwhPeople: [],
    });

    // used so that the table will render the correct amount of rows when numPeople changes each time
    useEffect(() => {
        if (!Number.isInteger(numPeople) || Number(numPeople) <= 0) return;

        const newKwhPeople = Array.from({length: Number(numPeople)}, () => ({
            name: "",
            prvKwh: "",
            currKwh: "",
        }));
        
        setInputValue(prev => ({...prev, kwhPeople: newKwhPeople}));
    }, [numPeople]);

    const handleClick = () => {
        setBillData(inputValue);
    };


    
    if (!Number.isInteger(numPeople) || Number(numPeople) <= 0) {
        return null;
    }

    return (
        <section className="bill-input container mb-5">
            <div className="col-12 col-md-4 mb-5">
                <label htmlFor="total-kwh" className="form-label">Total kWh used this month:</label>
                <input 
                    type="number" 
                    className="form-control" 
                    id="total-kwh" 
                    value={inputValue.totalKwh}
                    onChange={(e) => {setInputValue((prev) => ({...prev, totalKwh: e.target.value}))}}
                />
    
                <label htmlFor="total-price" className="form-label">Total price this month:</label> 
                <input 
                    type="number" 
                    className="form-control" 
                    id="total-price" 
                    value={inputValue.totalPrice}
                    onChange={(e) => {setInputValue((prev) => ({...prev, totalPrice: e.target.value}))}}
                />
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>Room Number / Name</th>
                        <th>Room Prv. kWh</th>
                        <th>Room Curr. kWh</th>
                    </tr>
                </thead>

                <tbody>
                    {inputValue.kwhPeople.map((_, i) => (
                        <tr key={i}>
                            <td>
                                <input
                                    type="text"
                                    className="form-control w-75"
                                    value={inputValue.kwhPeople[i].name}
                                    onChange={(e) => {setInputValue((prev) => {
                                        const newKwhPeople = [...prev.kwhPeople];
                                        newKwhPeople[i] = {...newKwhPeople[i], name: e.target.value}
                                        return {...prev, kwhPeople: newKwhPeople}
                                    })}}
                                />
                            </td>

                            <td>
                                <input
                                    type="number"
                                    className="form-control w-75"
                                    value={inputValue.kwhPeople[i].prvKwh}
                                    onChange={(e) => {setInputValue((prev) => {
                                        const newKwhPeople = [...prev.kwhPeople];
                                        newKwhPeople[i] = {...newKwhPeople[i], prvKwh: e.target.value}
                                        return {...prev, kwhPeople: newKwhPeople}
                                    })}}
                                />
                            </td>

                            <td>
                                <input
                                    type="number"
                                    className="form-control w-75"
                                    value={inputValue.kwhPeople[i].currKwh}
                                    onChange={(e) => {setInputValue((prev) => {
                                        const newKwhPeople = [...prev.kwhPeople];
                                        newKwhPeople[i] = {...newKwhPeople[i], currKwh: e.target.value}
                                        return {...prev, kwhPeople: newKwhPeople}
                                    })}}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
            <button className="btn btn-primary" onClick={handleClick}>Calculate</button>
        </section>
    );
}