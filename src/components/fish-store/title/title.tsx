import styles from "./title.module.scss";

const Title = () => {
  return (
    <header className={`${styles.header}`}>
      <h1 className={`${styles.title}`}>FISH STORE</h1>
      <h2 className={`${styles.subtitle}`}>
        <span>OUR PRODUCTS LIST</span>
      </h2>
    </header>
  );
};

export default Title;
