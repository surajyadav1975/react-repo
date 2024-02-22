import styles from "./item.module.css";
const Item = ({ fooditem ,handleclick,bought}) => {

  return (
    <li className={`list-group-item ${bought && 'active'} ${styles.hello}`}>
      <span className={styles["my-span"]}>{fooditem}</span>
      <button
        className={`${styles["my-button"]} btn btn-info`}
        onClick={(handleclick)}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
