import React, { useState } from 'react'
// import logo from './logo.svg'; //TODO: Make Logo
import styles from './App.module.css';
import ItemSelect from './components/ItemSelect/ItemSelect';
import PaymentSection from './components/PaymentSection/PaymentSection';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

function App() {

  const [moneyDue, setMoneyDue] = useState<number>(500);

  return (
    <div className="App">
      <Container maxWidth="md">
        <header className="main-header">
          VENDING MACHINE
        </header>
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
