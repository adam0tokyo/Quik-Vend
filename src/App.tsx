import React, { useState } from 'react'
// import logo from './logo.svg'; //TODO Make Logo
import styles from './App.module.css';
import Controls from './components/Controls/Controls';
import ItemSelect from './components/ItemSelect/ItemSelect';
import PayInfo from './components/PayInfo/PayInfo';


function App() {

  const [moneyDue, setMoneyDue] = useState<number>(0);
  const [insertedMoney, setInsertedMoney] = useState(0);

  return (
    <div className="App">
      <header className="main-header">
        VENDING MACHINE
      </header>
      <div className={styles.layoutcontainer} >
        {moneyDue}
        <ItemSelect setMoneyDue={setMoneyDue} moneyDue={moneyDue} />
        <PayInfo setInsertedMoney={setInsertedMoney} insertedMoney={insertedMoney} />
        <Controls />
      </div>
    </div >
  );
}

export default App;
