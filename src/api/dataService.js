

export default function() {
  // simulates data coming from a database.
  return Promise.resolve(
    [
        {
          custid: 1,
          name: "Tom",
          amt: 120,
          transactionDt: "05-01-2020"
        },
        {
          custid: 1,
          name: "Tom",
          amt: 75,
          transactionDt: "05-21-2020"
        },
        {
          custid: 1,
          name: "Mike",
          amt: 10,
          transactionDt: "06-01-2020"
        },
        {
          custid: 1,
          name: "Tom",
          amt: 75,
          transactionDt: "06-21-2020"
        },
        {
          custid: 1,
          name: "Mike",
          amt: 200,
          transactionDt: "07-01-2020"
        },
        {
          custid: 1,
          name: "Tom",
          amt: 1,
          transactionDt: "07-04-2020"
        },
        {
          custid: 1,
          name: "Tom",
          amt: 80,
          transactionDt: "07-03-2020"
        },
        {
          custid: 1,
          name: "Tom",
          amt: 224,
          transactionDt: "07-21-2020"
        },
        {
          custid: 2,
          name: "John",
          amt: 125,
          transactionDt: "05-01-2020"
        },
        {
          custid: 2,
          name: "John",
          amt: 75,
          transactionDt: "05-21-2020"
        },
        {
          custid: 2,
          name: "John",
          amt: 10,
          transactionDt: "06-01-2020"
        },
        {
          custid: 2,
          name: "John",
          amt: 75,
          transactionDt: "06-21-2020"
        },
        {
          custid: 2,
          name: "John",
          amt: 200,
          transactionDt: "07-01-2020"
        },
        {
          custid: 2,
          name: "John",
          amt: 224,
          transactionDt: "07-21-2020"
        },
        {
          custid: 3,
          name: "Mike",
          amt: 120,
          transactionDt: "06-21-2020"
        }
    ]
  );
};