import React, { useState } from 'react'
// import logo from './logo.svg'; //TODO: Make Logo
import styles from './App.module.css';
import ItemSelect from './components/ItemSelect/ItemSelect';
import PaymentSection from './components/PaymentSection/PaymentSection';


function App() {

  const [moneyDue, setMoneyDue] = useState<number>(500);

  return (
    <div className="App">
      <header className="main-header">
        VENDING MACHINE
      </header>
      <div className={styles.layoutcontainer} >
        <ItemSelect setMoneyDue={setMoneyDue} />
        <PaymentSection setMoneyDue={setMoneyDue} moneyDue={moneyDue} />
      </div>
    </div >
  );
}

export default App;
