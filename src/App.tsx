import React, { useState } from 'react'
import ItemSelect from './components/ItemSelect/ItemSelect';
import PaymentSection from './components/PaymentSection/PaymentSection';
import { Container, Grid, Typography } from '@mui/material';

function App() {

  const [moneyDue, setMoneyDue] = useState<number>(0);

  return (
    <div>
      <Container maxWidth="lg">
        <Typography variant='h2' align='center' sx={{ fontWeight: 'bold', m: 3 }} >
          VENDING MACHINE
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <ItemSelect setMoneyDue={setMoneyDue} />
          </Grid>
          <Grid item xs={12} md={4}>
            <PaymentSection setMoneyDue={setMoneyDue} moneyDue={moneyDue} />
          </Grid>
        </Grid>
      </Container>
    </div >
  );
}

export default App;
