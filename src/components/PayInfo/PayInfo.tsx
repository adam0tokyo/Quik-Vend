import React from 'react'
import styles from "../../App.module.css";

interface IProps {
    setInsertedMoney: React.Dispatch<React.SetStateAction<number>>,
    insertedMoney: number
}



const PayInfo: React.FC<IProps> = ({ insertedMoney, setInsertedMoney }) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInsertedMoney(Number(e.target.value))
    }

    //use this to pay
    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     setInsertedMoney(insertedMoney);
    // }

    return (
        <div className={styles.griditem}>
            PayInfo <br />
            {insertedMoney}
            <form>
                <label htmlFor='insertMoney'>Insert Money Here</label>
                <input
                    type="number"
                    onChange={handleChange}
                    className="PayInfo-input"
                    name="age"
                // value={insertedMoney}
                // placeholder="0"
                />
                {/* <button type="submit">Insert this amount</button> */}
            </form>
        </div>
    )
}

export default PayInfo