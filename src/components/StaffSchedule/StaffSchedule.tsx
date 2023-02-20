import styles from "./StaffSchedule.module.css"
import { useState } from "react";
import Calendar from '../CalendarGrid/Calendar'
import Details from "../CalendarGrid/Details";



export function StaffSchedule(){
    const [showDetails, setShowDetails] = useState(false);
    const [data, setData] = useState('');

    const showDetailsHandle = (dayStr:string) :void => {
        setData(dayStr);
        setShowDetails(true);
    };
    return (
        <div>
            <Calendar showDetailsHandle={showDetailsHandle} />
            <br />
            {showDetails && <Details data={data}/>}
        </div>
    )


}


