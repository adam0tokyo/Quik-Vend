import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import { Typography, TextField, Button, List, ListItem, ListItemText } from '@mui/material';

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
            if (Math.floor(remainingChange / Number(denom[1])) >= 0) {
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

    const handleConfirm = () => {
        //TODO: unit tests
        if (insertMoney >= moneyDue) {
            processReturnMoney();
            setInsertMoney(0)
        }
    }

    const renderReturnMoney = (): JSX.Element[] => {
        return Object.entries(returnMoney)
            .sort((a: [string, number], b: [string, number]) => Number(a[0]) - Number(b[0]))
            .map((denom: [string, number]) => {
                return (
                    <ListItem key={denom[0]}>
                        <ListItemText primary={denom[0]} />
                        <ListItemText
                            sx={{ textAlign: 'right' }}
                            primary={denom[1]}
                        />
                    </ListItem>
                )
            })
    }

    return (
        <Paper elevation={3} sx={{ p: 2, mb: 3 }}>
            <Typography variant='h4'>
                BALANCE DUE: {moneyDue}
            </Typography>
            <TextField
                value={insertMoney}
                id="outlined-number"
                label="PLEASE INSERT MONEY"
                type="number"
                onChange={handleChange}
                InputLabelProps={{
                    shrink: true,
                }}
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                sx={{ mt: 3 }}
            >
            </TextField><br />
            <Button variant="contained" color="success" onClick={handleConfirm} sx={{ mt: 3, mb: 3 }}>
                CONFRIM
            </Button>
            <Typography variant='h5'>
                RETURNED CHANGE
            </Typography>
            <List dense>
                {renderReturnMoney()}
            </List>
        </Paper>
    )
}

export default PaymentSection