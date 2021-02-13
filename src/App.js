import React, { useState, useEffect } from "react";
import getData from "./api/dataService";
import "./App.css";
//components
import TotalRewards from "./components/TotalRewards";
import Transactions from "./components/Transactions";

function getTransactions(inputData) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const pointsPerTransaction = inputData.map((transaction) => {
    let points = 0;
    const price = transaction.amt;
    if (price >= 50 && price < 100) {
      points += price - 50;
    } else if (price > 100) {
      points += 2 * (price - 100) + 50;
    } else {
      points += 0;
    }
    const month = new Date(transaction.transactionDt).getMonth();
    return { ...transaction, points, month };
  });

  let byCustomer = {};
  let totalPointsByCustomer = {};
  pointsPerTransaction.forEach((pointsPerTransaction) => {
    let { custid, name, month, points } = pointsPerTransaction;
    if (!byCustomer[custid]) {
      byCustomer[custid] = [];
    }
    if (!totalPointsByCustomer[custid]) {
      totalPointsByCustomer[name] = 0;
    }
    totalPointsByCustomer[name] += points;
    if (byCustomer[custid][month]) {
      byCustomer[custid][month].points += points;
      byCustomer[custid][month].monthNumber = month;
      byCustomer[custid][month].numTransactions++;
    } else {
      byCustomer[custid][month] = {
        custid,
        name,
        monthNumber: month,
        month: months[month],
        numTransactions: 1,
        points,
      };
    }
  });

  let transactions = [];
  for (var custKey in byCustomer) {
    byCustomer[custKey].forEach((cRow) => {
      transactions.push(cRow);
    });
  }

  return transactions;
}


const getTotalRewards = (transactions) => {
  let data = [];
  transactions.map((obj) => {
    const index = data.findIndex((d) => d.name === obj.name);
    if (index > -1) {
      data[index].points += obj.points;
    } else {
      data.push({
        name: obj.name,
        points: obj.points,
      });
    }
    return 0;
  });

  return data;
}

const App = () => {
  const [transactionData, setTransactionData] = useState([]);

  useEffect(() => {
    getData().then((data) => {
      const results = getTransactions(data);
      setTransactionData(results);
    });
  }, []);

  if (Object.keys(transactionData).length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-10">
            <h2>Monthly-wise Total Reward Points</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <Transactions
              summaryByCustomer={transactionData}
            />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-10">
            <h2>Customer-wise Total Reward Points</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <TotalRewards
              totalRewards={getTotalRewards(transactionData)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
