import PropType from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title ? <h2 className={css.title}>{title}</h2> : null}
      <ul className={css.statList}>
        {stats.map(({ label, percentage, id }) => {
          return (
            <li
              key={id}
              className={css.item}
              style={{ background: getRandomHexColor() }}
            >
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

function getRandomHexColor() {
  return `#${
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0) + 'cc'
  }`;
}

Statistics.propType = {
  title: PropType.string,
  stats: PropType.exact({
    id: PropType.string.isRequired,
    label: PropType.string.isRequired,
    percentage: PropType.number.isRequired,
  }),
};
