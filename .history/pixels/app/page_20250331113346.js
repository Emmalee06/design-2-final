import styles from "./page.module.css";


function Product ({name, price, image}){
  return (
    <article>
      <p>{name}</p>
      <p>{price}</p>
    </article>
  );
  }



export default function Home() {
  return (
    <div>
      <header className={styles.header}>
        <h1 className={styles.header__title}>My trinkets😍</h1>
      </header>
      <main className={styles.main}>
        <Product name="Cream 0' Broccoli"/>
        <Product name="Chicken Noodle Soup"/>
        <Product name="Turkey Soup"/>
        <Product />

      </main>
    </div>
  );
}
