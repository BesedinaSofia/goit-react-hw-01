import PropTypes from "prop-types";
import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.item}>
      <img src={avatar} alt="User avatar" className={styles.avatar} />
      <p className={styles.name}>{name}</p>
       <p className={`${styles.status} ${isOnline ? styles.online : styles.offline}`}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;