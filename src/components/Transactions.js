import React from "react";

const Transactions = (props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Customer</th>
          <th scope="col">Month</th>
          <th scope="col"># of Transactions</th>
          <th scope="col">Reward Points</th>
        </tr>
      </thead>
      <tbody>
        {props.summaryByCustomer.map((obj, index) => (
          <tr key={index}>
            <th scope="row">{obj.name}</th>
            <td>{obj.month}</td>
            <td>{obj.numTransactions}</td>
            <td>{obj.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Transactions;
