import { useState } from "react";

import InfoHeader from "./components/InfoHeader.jsx";
import NumPeopleInput from "./components/NumPeopleInput.jsx";
import BillInput from "./components/BillInput.jsx";
import BillResult from "./components/BillResult.jsx";

export default function App() {
    const [numPeople, setNumPeople] = useState(0);
    const [billData, setBillData] = useState({});

    return (
        <>
            <InfoHeader />
            <NumPeopleInput setNumPeople={setNumPeople} />
            <BillInput numPeople={numPeople} setBillData={setBillData} />
            <BillResult billData={billData} />
        </>
    );
}