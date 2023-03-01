import React from 'react'
import styles from "../../App.module.css";
// import styles from "./ItemSelect.module.css"

interface IProps {
    setMoneyDue: React.Dispatch<React.SetStateAction<number>>,
}


const ItemSelect: React.FC<IProps> = ({ setMoneyDue }) => {
    return (
        <div className={styles.griditem}>
            ItemSelect
        </div>
    )
}

export default ItemSelect