import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

import Header from './Header';
import Table from './Table';
import Add from './Add';
import Edit from './Edit';

import { appData } from '../../data';

const Dashboard = ({ setIsAuthenticated }) => {
  const [transactions, setTransactions] = useState(appData);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('app_data'));
    if (data !== null && Object.keys(data).length !== 0) setTransactions(data);
  }, []);

  const handleEdit = id => {
    const [transaction] = transactions.filter(transaction => transaction.id === id);

    setSelectedTransaction(transaction);
    setIsEditing(true);
  };

  const handleDelete = id => {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then(result => {
      if (result.value) {
        const [transaction] = transactions.filter(transaction => transaction.id === id);

        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: `${transaction.date} ${transaction.description}'s data has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });

        const transactionsCopy = transactions.filter(transaction => transaction.id !== id);
        localStorage.setItem('app_data', JSON.stringify(transactionsCopy));
        setTransactions(transactionsCopy);
      }
    });
  };

  return (
    <div className="container">
      {!isAdding && !isEditing && (
        <>
          <Header
            setIsAdding={setIsAdding}
            setIsAuthenticated={setIsAuthenticated}
          />
          <Table
            transactions={transactions}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}
      {isAdding && (
        <Add
          transactions={transactions}
          setTransactions={setTransactions}
          setIsAdding={setIsAdding}
        />
      )}
      {isEditing && (
        <Edit
          transactions={transactions}
          selectedTransaction={selectedTransaction}
          setTransactions={setTransactions}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
};

export default Dashboard;
