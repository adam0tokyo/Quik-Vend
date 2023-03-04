import React, { useState } from 'react'
import styles from "../../App.module.css";
import Paper from '@mui/material/Paper';

interface IProps {
    setMoneyDue: React.Dispatch<React.SetStateAction<number>>,
    moneyDue: number
}

interface IReturnMoney {
    [key: string]: number;
}

const initialReturnMoney: IReturnMoney = {
    1000: 0,
    500: 0,
    100: 0,
    50: 0,
    10: 0,
    5: 0,
    1: 0,
}

const PaymentSection: React.FC<IProps> = ({ setMoneyDue, moneyDue }) => {

    const [insertMoney, setInsertMoney] = useState<number>(0);
    const [returnMoney, setReturnMoney] = useState<IReturnMoney>(initialReturnMoney)

    function processReturnMoney() {
        let remainingChange = insertMoney - moneyDue;
        setMoneyDue(0);
        let sortedDenominations = Object.entries(returnMoney)
            .sort((a: [string, number], b: [string, number]) => Number(b[0]) - Number(a[0]));
        let updatedReturnMoney: IReturnMoney = initialReturnMoney;

        sortedDenominations.forEach((denom) => {
            if (Math.floor(remainingChange / Number(denom[1])) > 0) {
                const denomCount = Math.floor(remainingChange / Number(denom[0]));
                updatedReturnMoney[denom[0]] = denomCount;
                remainingChange = remainingChange % Number(denom[0]);
            }
        })
        setReturnMoney(updatedReturnMoney)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInsertMoney(Number(e.target.value))
    }

    const handleCancel = () => {
        setInsertMoney(0)
    }

    const handleConfirm = () => {
        //TODO: remove conditional, break up? processReturnMoney, return error on insufficient inserted money
        // etc., these need to be checked with tests, set button type to button?(don't clear inserted)
        //TODO: add alerts for success, failure, etc.
        if (insertMoney >= moneyDue) {
            processReturnMoney();
            setInsertMoney(0)
        }
    }

    const renderReturnMoney = (): JSX.Element[] => {
        return Object.entries(returnMoney)
            .sort((a: [string, number], b: [string, number]) => Number(b[0]) - Number(a[0]))
            .map((denom: [string, number]) => {
                return (
                    <li className="List" key={denom[0]}>
                        {denom[0]}: {denom[1]}
                    </li >
                )
            })
    }

    return (
        <Paper elevation={4}>

            PayInfo <br />
            Balance Due: {moneyDue}

            <form>
                <label htmlFor='insertMoney'>Insert Money</label>
                <input
                    type="number"
                    onChange={handleChange}
                    className="PayInfo-input"
                    name="age"
                    placeholder="0"
                />
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
        </Paper>
    )
}

export default PaymentSection