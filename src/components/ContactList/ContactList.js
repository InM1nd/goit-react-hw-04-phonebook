import PropTypes from 'prop-types'; 
import style from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
      <ul>
        {contacts.map(({ id, name, number }) => {
          return (
            <li key={id} className={style.item}>
              {name}: {number}
              <button onClick={() => onDeleteContact(id)} className={style.button}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  };
  
  ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
    onDeleteContact: PropTypes.func.isRequired,
  };
  
  export default ContactList;