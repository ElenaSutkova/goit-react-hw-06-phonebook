import { useDispatch } from "react-redux";
import { deleteContact } from "store/contactSlice";
import styles from './ContactListItem.module.css';

const ContactListItem = ({ id, name, number }) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(deleteContact(id));
    };

    return (
        <li className={styles.item}>
            <p>{name}: {number}</p>
            <button className={styles.button} onClick={handleClick}>Delete</button>
        </li>
    )
};

export default ContactListItem;