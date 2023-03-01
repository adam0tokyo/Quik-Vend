import React from 'react'
import styles from "../../App.module.css";

interface IProps {
    insertMoney: number
}

interface CoinHolder {
    [key: string]: number
}

const Controls: React.FC<IProps> = ({ insertMoney }) => {


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


    return (
        <div className={styles.griditem}>
            Controls
            {insertMoney}

        </div>
    )
}

export default Controls