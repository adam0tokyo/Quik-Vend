import React from 'react'
import { Grid, Card, Box, CardMedia, Typography, CardActionArea } from '@mui/material'
import { productList } from '../../data/Items'

interface IProps {
    setMoneyDue: React.Dispatch<React.SetStateAction<number>>,
}

interface Iproduct {
    name: string;
    imageURL: string;
    price: number;
}

const ItemSelect: React.FC<IProps> = ({ setMoneyDue }) => {

    const handleSelectedProduct = (price: number) => {
        setMoneyDue(price)
    }

    return (
        <Grid container spacing={2} mb={3}>
            {productList.map((product: Iproduct) => {
                return (
                    <Grid item xs={6} md={6} key={product.name}>
                        <Card sx={{ maxWidth: 800, display: 'flex', '&:hover': { '& $overlay': { opacity: 1 } } }}>
                            <CardActionArea
                                onClick={() => handleSelectedProduct(product.price)}
                            >
                                <CardMedia
                                    component="img"
                                    height="150"
                                    image={product.imageURL}
                                    alt={product.name}
                                />
                                <Box sx={{ p: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography variant="h5">
                                        {product.name}
                                    </Typography><Typography variant="h4" component="div" align='right'>
                                        {product.price}
                                    </Typography>
                                </Box>
                            </CardActionArea>
                        </Card>
                    </Grid>
                )
            })}
        </Grid >

    )
}

export default ItemSelect