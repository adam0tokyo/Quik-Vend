import React, { useState } from 'react'
// import logo from './logo.svg'; //TODO: Make logo
// import styles from './App.module.css';
import ItemSelect from './components/ItemSelect/ItemSelect';
import PaymentSection from './components/PaymentSection/PaymentSection';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material';

function App() {

  const [moneyDue, setMoneyDue] = useState<number>(500);

  return (
    <div>
      <Container maxWidth="md">
        <Typography variant='h1' sx={{ fontWeight: 'bold' }} >
          VENDING MACHINE
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <ItemSelect setMoneyDue={setMoneyDue} />
          </Grid>
          <Grid item xs={12} md={6}>
            <PaymentSection setMoneyDue={setMoneyDue} moneyDue={moneyDue} />
          </Grid>
        </Grid>
      </Container>
    </div >
  );
}

export default App;
