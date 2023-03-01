import React from 'react'
import styles from "../../App.module.css";
// import styles from "./ItemSelect.module.css"

interface IProps {
    setMoneyDue: React.Dispatch<React.SetStateAction<number>>,
    moneyDue: number
}


const ItemSelect: React.FC<IProps> = ({ setMoneyDue, moneyDue }) => {
    return (
        <div className={styles.griditem}>
            ItemSelect
            {moneyDue}
        </div>
    )
}

export default ItemSelect