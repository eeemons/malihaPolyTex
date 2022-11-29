import styles from "./css/footer.module.css";

const Footer = (props) => {
  return (
    <div
      className={`${styles.footerContainer} ${
        props.dark ? styles.darkMode : ""
      }`}
    >
      <div>
        <p>Designed by Maksudul Haque</p>
        <p>Copyright Maksudul Haque</p>
      </div>
      <div>
        <p>eeemons@live.com</p>
        <p>01684683581</p>
      </div>
      <div>
        <a href="#" className="fa fa-facebook"></a>
        <a href="#" className="fa fa-twitter"></a>
        <a href="#" className="fa fa-google"></a>
        <a href="#" className="fa fa-linkedin"></a>
        <a href="#" className="fa fa-youtube"></a>
        <a href="#" className="fa fa-instagram"></a>
        <a href="#" className="fa fa-pinterest"></a>
        <a href="#" className="fa fa-snapchat-ghost"></a>
      </div>
    </div>
  );
};
export default Footer;
