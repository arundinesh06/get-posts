import React from "react";
import styles from "./Home.module.scss";
import Posts from "../../components/Posts";

const Home = () => {
  return (
    <div className={styles.container}>
      <Posts />
    </div>
  );
};

export default Home;
