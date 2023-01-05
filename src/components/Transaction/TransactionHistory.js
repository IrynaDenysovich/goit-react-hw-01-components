import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.tableHead}>
        <tr className={css.tableColum}>
          <th className={css.tableItem}>Type</th>
          <th className={css.tableItem}>Amount</th>
          <th className={css.tableItem}>Currency</th>
        </tr>
      </thead>
      <tbody className={css.tableBody}>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr className={css.tableColum} key={id}>
              <td className={css.tableItem}>{type}</td>
              <td className={css.tableItem}>{amount}</td>
              <td className={css.tableItem}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
