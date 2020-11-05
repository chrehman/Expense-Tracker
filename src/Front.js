import React,{useContext,useState} from 'react'
import {TransactionContext} from './transactionContext'
import './front.css'
export default function Front() {
    
    let {transactions,addTransaction,delTransaction} = useContext(TransactionContext);
    let [newAmount,setnewAmount]=useState();
    let [newDesc,setnewDesc]=useState('');
    let [id,setId]=useState(4);
    // let [income,setIncome]=useState(0);
    // let [expense,setExpense]=useState(0);
    // console.log(transactions);

    const getIncome=()=>{
        var income=0;
        for(let i=0;i<transactions.length;i++){
            if(transactions[i].amount>0){
                income+=transactions[i].amount;
            }
        }
        return income;
    }
    const getExpense=()=>{
        var expense=0;
        for(let i=0;i<transactions.length;i++){
            if(transactions[i].amount<0){
                expense+=transactions[i].amount;
            }
        }
        return expense;
    }

    const  handleEvent=(event)=>{
        event.preventDefault();
        if(newAmount===0){
            alert("Enter valid amount");
            return;
        }
        addTransaction({
            
            amount:newAmount,
            desc:newDesc,
            id:id

        });
        setId(++id);
        setnewAmount(0);
        setnewDesc('');
    }
    return (
        <div className="container">

            <h1>Expense Tracker</h1>
            <h3>Balance<br/>
            ${getIncome()+getExpense()}</h3>
            
            <div className="Expense-container">
            <h4>Income<br/>
            {getIncome()}</h4>
            <h4>Expense<br/>
            {getExpense()}</h4>
            
            </div>
            <h4>History</h4>
            <hr/>
            <div className="transactions">
                {transactions.map((transObj,index)=>{
                    return( 
                        <button className="history-button"key={index} onClick={()=>{
                            delTransaction(transObj.id);
                        }}>
                            
                            <span>{transObj.desc}</span>
                            <span>${transObj.amount}</span>
                            
                        </button>
                        
                    )
                    
                })}
            </div>
            <h5> NOTE:  To Delete History click on list item to delte item from history </h5>
            <form onSubmit={handleEvent}>
                <h4>Enter Description</h4>
                <input type="text" value={newDesc} placeholder="Enter Description Here" required onChange={(ev)=>{
                    setnewDesc(ev.target.value)
                }} ></input>
                <h4>Enter Amount </h4>
                <h5>Note : If expense than give value in neagtive example(-50,-100) otherwise give value in positive  </h5>
                <input type="number" value={newAmount} required onChange={(ev)=>{
                    setnewAmount(Number(ev.target.value));
                    // console.log(newAmount);
                }}></input>
                <input type="submit" value="Add transaction" />
            </form>
            
        </div>
    )
}
