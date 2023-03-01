import React from 'react'
import styles from "../../App.module.css";

interface IProps {
    setInsertedMoney: React.Dispatch<React.SetStateAction<number>>,
    insertedMoney: number
}



const PayInfo: React.FC<IProps> = ({ insertedMoney, setInsertedMoney }) => {

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //     setInsertedMoney(
    //         // [e.target.name]: e.target.value
    //     )
    // }

    return (
        <div className={styles.griditem}>
            PayInfo <br />
            {insertedMoney}
            {/* <input
                type="number"
                onChange={handleChange}
                className="PayInfo-input"
                name="age"
                value={insertedMoney}
                placeholder="Age"
            /> */}
        </div>
    )
}

export default PayInfo