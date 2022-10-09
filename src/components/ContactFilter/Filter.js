import PropTypes from 'prop-types';
import style from './ContactFilter.module.css';

const Filter = ({ value, inputFilterContact }) => {
  return (
    <label>
      <p className={style.text}>Find contact by name</p>
      <input
        type="text"
        value={value}
        onChange={inputFilterContact}
        className={style.input}
      ></input>
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  inputFilterContact: PropTypes.func.isRequired,
};

export default Filter;