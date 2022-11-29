import styles from "./css/app.module.css";
import { useRef, useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Preloader from "./Preloader";

function App() {
  const inputRefOne = useRef(null);
  const inputRefTwo = useRef(null);
  const inputRefThree = useRef(null);
  const [darkMode, setDarkMode] = useState(false);
  const [animationOne, setAnimationOne] = useState(false);
  const [animationTwo, setAnimationTwo] = useState(false);
  const [animationThree, setAnimationThree] = useState(false);
  const [loadingScreen, setLoadingScreen] = useState(false);
  var cssVar = document.querySelector(":root");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingScreen(true);
    }, 4200);
    return () => clearTimeout(timer);
  }, []);

  const handleKeyDownOne = (event) => {
    if (event.key === "Enter") {
      handleChangeOne();
    }
  };
  const handleKeyDownTwo = (event) => {
    if (event.key === "Enter") {
      handleChangeTwo();
    }
  };
  const handleKeyDownThree = (event) => {
    if (event.key === "Enter") {
      handleChangeThree();
    }
  };
  function handleChangeOne() {
    var result = inputRefOne.current.value;
    setAnimationOne(!animationOne);
    cssVar.style.setProperty("--clr-boxOne", result);
    // console.log(result);
  }
  function handleChangeTwo() {
    let result = inputRefTwo.current.value.replace(/[^a-z]/gi, "");
    setAnimationTwo(!animationTwo);
    cssVar.style.setProperty("--clr-boxTwo", result);
    // console.log(result);
  }
  function handleChangeThree() {
    let result = inputRefThree.current.value;
    let modResult;
    if (result[0] == "#") {
      cssVar.style.setProperty("--clr-boxThree", result);
      setAnimationThree(!animationThree);
      // console.log(result);
    } else {
      result = result.substring(0, result.length);
      modResult = "#" + result;
      cssVar.style.setProperty("--clr-boxThree", modResult);
      setAnimationThree(!animationThree);
      // console.log(modResult);
    }
  }

  const switchTheme = () => {
    setDarkMode((current) => !current);
  };
  return (
    <>
      <div className={`${loadingScreen ? styles.hide : styles.show}`}>
        <Preloader />
      </div>
      <Header changeTheme={switchTheme} />
      <div className={`${styles.container} ${darkMode ? styles.dark : ""}`}>
        <div className={styles.innerContainer}>
          <p>Color Name/Code</p>
          <div
            className={`${styles.colorField} ${styles.boxOne} ${
              animationOne ? styles.hoverOne : ""
            }`}
          ></div>
          <input
            type="text"
            name=""
            id=""
            placeholder="Color Name/Code"
            ref={inputRefOne}
            onKeyDown={handleKeyDownOne}
          />
          <button onClick={handleChangeOne}>
            <span>&gt;</span>
          </button>
        </div>

        <div className={styles.innerContainer}>
          <p>Color Name</p>
          <div
            className={`${styles.colorField} ${styles.boxTwo} ${
              animationTwo ? styles.hoverTwo : ""
            }`}
          ></div>
          <input
            type="text"
            name=""
            id=""
            placeholder="Color Name"
            ref={inputRefTwo}
            onKeyDown={handleKeyDownTwo}
          />
          <button onClick={handleChangeTwo}>
            <span>&#62;</span>
          </button>
        </div>

        <div className={styles.innerContainer}>
          <p>Code</p>
          <div
            className={`${styles.colorField} ${styles.boxThree} ${
              animationThree ? styles.hoverThree : ""
            }`}
          ></div>
          <input
            type="text"
            name=""
            id=""
            placeholder="Code"
            ref={inputRefThree}
            onKeyDown={handleKeyDownThree}
          />
          <button onClick={handleChangeThree}>
            <span>&#62;</span>
          </button>
        </div>
      </div>
      <Footer dark={darkMode} />
    </>
  );
}

export default App;
