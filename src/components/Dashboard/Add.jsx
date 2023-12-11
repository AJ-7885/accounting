import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Add = ({ transactions, setTransactions, setIsAdding }) => {

  const [date, setDate] = useState();
  const [category, setCategory] = useState();
  const [description, setDescription] = useState();
  const [reference, setReference] = useState();
  const [quantity, setQuantity] = useState();
  const [debitUnit, setDebitUnit] = useState();
  const [creditUnit, setCreditUnit] = useState();
  const [source, setSource] = useState();


  const handleAdd = e => {
    e.preventDefault();

    if (!date || !quantity || !description || !source) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const id = transactions.length + 1;
    const newTransaction = {
      id,
      date,
      category,
      description,
      reference,
      quantity,
      debitUnit,
      creditUnit,
      source
    };

    transactions.push(newTransaction);
    localStorage.setItem('app_data', JSON.stringify(transactions));
    setTransactions(transactions);
    setIsAdding(false);

    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `${newTransaction.date} ${newTransaction.description}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Add Transaction</h1>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <label htmlFor="category">Category</label>
        <input
          id="category"
          type="text"
          name="category"
          value={category}
          onChange={e => setCategory(e.target.value)}
        />
        <label htmlFor="category">Description</label>
        <input
          id="description"
          type="text"
          name="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <label htmlFor="reference">Reference</label>
        <input
          id="reference"
          type="text"
          name="reference"
          value={reference}
          onChange={e => setReference(e.target.value)}
        />
        <label htmlFor="quantity">Quantity</label>
        <input
          id="quantity"
          type="number"
          name="quantity"
          value={quantity}
          onChange={e => setQuantity(e.target.value)}
        />
        <label htmlFor="debitUnit">Debit Unit</label>
        <input
          id="debitUnit"
          type="number"
          name="debitUnit"
          value={debitUnit}
          onChange={e => setDebitUnit(e.target.value)}
        />
        <label htmlFor="creditUnit">Credit Unit</label>
        <input
          id="creditUnit"
          type="number"
          name="creditUnit"
          value={creditUnit}
          onChange={e => setCreditUnit(e.target.value)}
        />
        <label htmlFor="source">Source</label>
        <input
          id="source"
          type="text"
          name="source"
          value={source}
          onChange={e => setSource(e.target.value)}
        />

        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Add;
