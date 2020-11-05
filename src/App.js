import React from 'react'
import './App.css';
// import ValueContext from './ValueContext';
// import Parent from './Parent'
import {TransactionProvider} from './transactionContext';
import Front from './Front';
function App() {
  // let value= useState(55);
  return (
    
    // <ValueContext.Provider value={value}>
    //   <div>
    //       <h1>Hello From App</h1>
    //       <Parent/>
    //   </div>

    // </ValueContext.Provider>
    
    <TransactionProvider>
      <Front/>
    </TransactionProvider>

  );
}

export default App;
