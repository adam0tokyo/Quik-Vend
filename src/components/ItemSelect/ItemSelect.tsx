import React from 'react'
// import styles from "../../App.module.css";
// import styles from "./ItemSelect.module.css"
import Grid from '@mui/material/Grid'
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



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

    //TODO: move to items component
    const productsList: Iproduct[] = [
        {
            name: 'SODA',
            description: 'A nice, refreshing drink',
            imageURL: '/images/Campari_Soda.jpg',
            price: 220,
        },
        {
            name: 'FRUIT PUNCH',
            description: 'when life gives you lemons',
            imageURL: '/images/fruit_punch.webp',
            price: 111,
        },
        {
            name: 'KIWI JUICE',
            description: 'which fruit??',
            imageURL: '/images/kiwi-wheatgrass-juice.jpg',
            price: 7001,
        }
    ]

    const handleSelectedProduct = (price: number) => {
        setMoneyDue(price)
    }





    return (
        <Grid container spacing={2}>
            {productsList.map((product: Iproduct) => {
                return (
                    <Grid item xs={6} md={6}>
                        <Card sx={{ maxWidth: 800 }}>
                            <CardActionArea
                                onClick={() => handleSelectedProduct(product.price)}
                            >
                                <CardMedia
                                    component="img"
                                    height="150"
                                    image={product.imageURL}
                                    alt={product.name}
                                />
                                <CardContent>
                                    <Typography variant="h4">
                                        {product.name}  {product.price}
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="div">

                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                )
            })}
        </Grid >

    )
}

export default ItemSelect