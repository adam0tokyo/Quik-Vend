import React from 'react'
import styles from "../../App.module.css";
// import styles from "./ItemSelect.module.css"

interface IProps {
    setMoneyDue: React.Dispatch<React.SetStateAction<number>>,
}

interface Iproduct {
    name: string;
    description: string;
    imageURL: string;
    price: number;
}

const ItemSelect: React.FC<IProps> = ({ setMoneyDue }) => {

    const productsList: Iproduct[] = [
        {
            name: 'cola',
            description: 'A nice, refreshing drink',
            imageURL: 'none',
            price: 220,
        },
        {
            name: 'lemonaid',
            description: 'when life gives you lemons',
            imageURL: 'none',
            price: 111,
        },
        {
            name: 'juice',
            description: 'which fruit??',
            imageURL: 'none',
            price: 7001,
        }
    ]

    const handleSelectedProduct = (price: number) => {
        setMoneyDue(price)
    }

    const renderProducts = (): JSX.Element[] => {
        return productsList.map((product: Iproduct) => {
            return (
                <li className="List" key={product.name}>
                    {product.name}<br />
                    {product.description}<br />
                    <button type="button" onClick={() => handleSelectedProduct(product.price)}>{product.price}</button><br />
                </li >
            )
        })
    }



    return (

        <div className={styles.griditem}>
            ItemSelect
            <ul>
                {renderProducts()}
            </ul>
        </div>

    )
}

export default ItemSelect