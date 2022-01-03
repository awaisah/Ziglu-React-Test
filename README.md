# Ziglu React Test

This project has been completed according to the requirements of the React test provided.

## Run Project

In the project directory, run the following to install all dependencies:
### `npm install`

Then run the following to start the web app:
### `npm start`

## Notes

- The UI in this app has been done using TailwindCSS.
- The stretch task has also been completed.
- Test cases to consider in future:
  - Ensure orders are only complete with sufficient funds.
  - Ensuring the source and destination are different.
  - Ensure one of the source or estination is USD.
  - Ensure order amount is a positive number.
  - Ensure a new acount is open when a first order is made.
- In order to show the total balance in USD you would want to get the balance for all accounts and convert each of their USD value. Then you would just append all of them. USD would be appended without any convertion and it is already in the currency we want.
- Error states which need to be considered:
  - If http errors are sent back. For example, a HTTP 429 error whcih happens when you make too many requests. In this contexts this may be more than 5 requests per second which is the limit of the API.
  - In a real world crypto trading platform we would not be able to make instant trades a lot of the time. The price should be retreived when the order is about to be completed rather than when its placed.
  - If multiple orders are places simultaneously we want to ensure the current balance is sufficient for all the orders being placed.
