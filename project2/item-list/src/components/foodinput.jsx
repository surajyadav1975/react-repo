import styles from "./foodinput.module.css";
function Foodinput({handlekeydown}) {
  
  return (
    <input
      type="text"
      placeholder="Enter Food Here"
      className={styles.foodInput}
      onKeyDown={handlekeydown}
    />
  );
}

export default Foodinput;
