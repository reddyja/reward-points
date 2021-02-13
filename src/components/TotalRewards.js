import React from "react";

const TotalRewards = (props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Customer</th>
          <th scope="col">Total Reward Points</th>
        </tr>
      </thead>
      <tbody>
        {props.totalRewards.map((obj, index) => (
          <tr key={index}>
            <th scope="row">{obj.name}</th>
            <td>{obj.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TotalRewards;
