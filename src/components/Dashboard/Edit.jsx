import React, { useState } from 'react';
import Swal from 'sweetalert2';
  
const Edit = ({ transactions, selectedTransaction, setTransactions, setIsEditing }) => {
  const id = selectedTransaction.id;

  const [date, setDate] = useState(selectedTransaction.date);
  const [category, setCategory] = useState(selectedTransaction.category);
  const [description, setDescription] = useState(selectedTransaction.description);
  const [reference, setReference] = useState(selectedTransaction.reference);
  const [quantity, setQuantity] = useState(selectedTransaction.quantity);
  const [debitUnit, setDebitUnit] = useState(selectedTransaction.debitUnit);
  const [creditUnit, setCreditUnit] = useState(selectedTransaction.creditUnit);
  const [source, setSource] = useState(selectedTransaction.source);

  const handleUpdate = e => {
    e.preventDefault();
  
    if (!date || !quantity || !description || !source) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const transaction = {
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

    for (let i = 0; i < transactions.length; i++) {
      if (transactions[i].id === id) {
        transactions.splice(i, 1, transaction);
        break;
      }
    }

    localStorage.setItem('app_data', JSON.stringify(transactions));
    setTransactions(transactions);
    setIsEditing(false);

    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: `${transaction.date} ${transaction.description}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit Transaction</h1>
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
          <input type="submit" value="Update" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Edit;
