import React from 'react';

const Table = ({ transactions, handleEdit, handleDelete }) => {
  transactions.forEach((transaction, i) => {
    transaction.id = i + 1;
  });

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
  });

  return (
    <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Date</th>
            <th>Category</th>
            <th>Description</th>
            <th>Ref.No</th>
            <th>Qty.</th>
            <th>D-Unit</th>
            <th>C-Unit</th>
            <th>Debit</th>
            <th>Credit</th>
            <th>Supply</th>
            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {transactions.length > 0 ? (
            transactions.map((transaction, i) => (
              <tr key={transaction.id}>
                <td>{i + 1}</td>
                <td>{transaction.date} </td>
                <td>{transaction.category}</td>
                <td>{transaction.description}</td>
                <td>{transaction.reference}</td>
                <td>{transaction.quantity}</td>
                <td>{formatter.format(transaction.debitUnit)}</td>
                <td>{formatter.format(transaction.creditUnit)}</td>
                <td>{formatter.format(transaction.quantity*transaction.debitUnit)}</td>
                <td>{formatter.format(transaction.quantity*transaction.creditUnit)}</td>
                <td>{transaction.source}</td>
                <td>{transaction.status}</td>
                <td className="text-right">
                  <button
                    onClick={() => handleEdit(transaction.id)}
                    className="button muted-button"
                  >
                    Edit
                  </button>
                </td>
                <td className="text-left">
                  <button
                    onClick={() => handleDelete(transaction.id)}
                    className="button muted-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No transaction</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
