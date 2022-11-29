import styles from "./css/preloader.module.css";
function Preloader() {
  return (
    <div className={styles.container}>
      <h1 data-title="Loading" className={styles.textFill}>
        Loading
      </h1>
    </div>
  );
}
export default Preloader;
