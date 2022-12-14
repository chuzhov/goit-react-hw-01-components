import PropTypes from "prop-types";
import TransactionRow from "./TransactionRow";
import css from "./TransactionTable.module.css";

const TransactionTable = ( { transactions } ) => {

const tableInnerMarkup = transactions.map(
    transaction => <TransactionRow  key={transaction.id}
                                    type={transaction.type}
                                    amount={transaction.amount}
                                    currency={transaction.currency} 
    />

);
    return (<table className = {css["transaction-history"]}>
    <caption className={css["table-caption"]}>The Bank of Galaxy Empire Report:</caption>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
        {tableInnerMarkup}
    </tbody>
  </table>
  )
}

TransactionTable.propTypes = {
    transactions: PropTypes.array.isRequired,
}

export default TransactionTable;