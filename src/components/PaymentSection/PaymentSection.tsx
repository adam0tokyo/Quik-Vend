import React, { useState } from 'react'
import styles from "../../App.module.css";

interface IProps {
    setMoneyDue: React.Dispatch<React.SetStateAction<number>>,
    moneyDue: number
}

interface ReturnChange {
    1000: number,
    500: number,
    100: number,
    50: number,
    10: number,
    5: number,
    1: number
}

const initialReturnChange: ReturnChange = {
    "1000": 0,
    "500": 0,
    "100": 0,
    "50": 0,
    "10": 0,
    "5": 0,
    "1": 0,
}

const PaymentSection: React.FC<IProps> = ({ setMoneyDue, moneyDue }) => {

    const [insertMoney, setInsertMoney] = useState<number>(0);
    const [returnMoney, setReturnMoney] = useState<ReturnChange>(initialReturnChange)

    // function changeMaker(insertedMoney: number, moneyDue: number) {
    //     // const denominations = [1000, 500, 100, 50, 10, 5, 1];
    //     let denomCount: number;
    //     // const returnChange: CoinHolder = {};
    //     let remainingChange = insertedMoney - moneyDue;
    //     setMoneyDue(0);

    //     denominations.forEach((denom) => {
    //         if (Math.floor(remainingChange / denom) > 0) {
    //             denomCount = Math.floor(remainingChange / denom);
    //             returnChange[denom] = denomCount;
    //             remainingChange = remainingChange % denom;
    //         }
    //     })
    // }


    function changeMaker() {
        let remainingChange = insertMoney - moneyDue;

        setMoneyDue(0);
        let denomCount = 0;
        let sortedDenominations = Object.entries(returnMoney).sort((a: number[], b: number[]) => Number(b[0]) - Number(a[0]))
        // console.log(sortedDenominations);
        //TODO: fix typing of this
        let tempGuy: any = initialReturnChange;


        sortedDenominations.forEach((denom) => {
            //TODO: clean up function
            if (Math.floor(remainingChange / Number(denom[1])) > 0) {
                denomCount = Math.floor(remainingChange / Number(denom[0]));
                console.log(denom[0], denom[1]);

                tempGuy[denom[0]] = denomCount

                // returnChange[denom] = denomCount;
                remainingChange = remainingChange % Number(denom[0]);
                console.log("remainingChange:", remainingChange);
            }
        })
        console.log(tempGuy);
        setReturnMoney(tempGuy)
    }


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInsertMoney(Number(e.target.value))
    }

    const handleCancel = () => {
        setInsertMoney(0)
    }

    const handleConfirm = () => {
        //TODO: CONDITIONAL FOR NON-NUMBER, send alerts
        if (insertMoney >= moneyDue) {
            changeMaker();
            setInsertMoney(0)
            console.log(returnMoney);
        }
    }

    const renderReturnMoney = (): JSX.Element[] => {
        return Object.entries(returnMoney).sort((a: number[], b: number[]) => Number(b[0]) - Number(a[0])).map(denom => {
            return (
                <li className="List">
                    <p>{denom[0]}:</p>
                    <p>{denom[1]}</p>
                </li >
            )
        })
    }



    //use this to pay
    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     setInsertMoney(insertMoney);
    // }

    return (
        <div className={styles.griditem}>
            PayInfo <br />
            Balance Due: {moneyDue}

            <form>
                <label htmlFor='insertMoney'>Insert Money</label>
                <input
                    type="number"
                    onChange={handleChange}
                    className="PayInfo-input"
                    name="age"
                    // value={insertMoney}
                    placeholder="0"
                />
                {/* <button type="submit">Insert this amount</button> */}
                <button type="reset" onClick={handleConfirm}>Confirm</button>
                <button type="reset" onClick={handleCancel}>Cancel</button>
            </form>
            Inserted Money <br />
            {insertMoney} <br />
            <br />
            Returned Coins
            <ul>
                {renderReturnMoney()}
            </ul>
        </div>
    )
}

export default PaymentSection