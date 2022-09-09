import React,{useState,useContext} from 'react'

import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
    const [description,setDescription] = useState();
    const [transactionAmount,setTransactionAmount] = useState();

    const {addTransaction}  =useContext(GlobalContext)

    const onSubmit = (e) =>{
      e.preventDefault();

      const newTransaction = {
        id: new Date().getTime(),
        description,
        transactionAmount: +transactionAmount
      }

      addTransaction(newTransaction)
    }
  return (
    <div>
      <h3>ADD New Transaction</h3>
      <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="description">Description</label>
        <input 
        type="text"
         placeholder='Detail of Transaction'
         id='description'
         value={description}
         onChange={(e) => setDescription(e.target.value)}
         />
      </div>
      <div>
        <label htmlFor="transactionamount">Transaction Amount</label>
        <input 
        type="text" 
        placeholder='Dollar Value Of Transaction'
        id='transactionamount'
        value={transactionAmount}
        onChange={(e) => setTransactionAmount(e.target.value)}
        />
      </div>
      <button className='btn'>Add Transaction</button>
      </form>
    </div>
  )
}

export default AddTransaction
