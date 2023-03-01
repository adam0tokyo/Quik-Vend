import React, { useState } from 'react'
import styles from "../../App.module.css";

interface IProps {
    setMoneyDue: React.Dispatch<React.SetStateAction<number>>,
    moneyDue: number
}

interface CoinHolder {
    [key: string]: number
}

const PaymentSection: React.FC<IProps> = ({ setMoneyDue, moneyDue }) => {

    const [insertMoney, setInsertMoney] = useState<number>(0);
    // const [returnMoney, setReturnMoney] = useState<CoinHolder>({})


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInsertMoney(Number(e.target.value))
    }

    function changeMaker(insertedMoney: number, moneyDue: number): CoinHolder {
        const denominations = [500, 100, 50, 10, 5, 1];
        let denomCount: number;
        const returnChange: CoinHolder = {};
        let remainingChange = insertedMoney - moneyDue;

        denominations.forEach((denom) => {
            if (Math.floor(remainingChange / denom) > 0) {
                denomCount = Math.floor(remainingChange / denom);
                returnChange[denom] = denomCount;
                remainingChange = remainingChange % denom;
            }
        })
        return returnChange
    }

    //use this to pay
    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     setInsertMoney(insertMoney);
    // }

    return (
        <div className={styles.griditem}>
            PayInfo <br />
            {insertMoney}
            <form>
                <label htmlFor='insertMoney'>Insert Money Here</label>
                <input
                    type="number"
                    onChange={handleChange}
                    className="PayInfo-input"
                    name="age"
                // value={insertMoney}
                // placeholder="0"
                />
                {/* <button type="submit">Insert this amount</button> */}
            </form>
            <button type="reset">Insert this amount</button>
        </div>
    )
}

export default PaymentSection