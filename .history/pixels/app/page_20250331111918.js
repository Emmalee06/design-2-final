import styles from "./page.module.css";


function Product (){
  return (
    <article>
      <p>Canned Soup</p>
      <p>$1.99</p>
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
        <Product />
      </main>
    </div>
  );
}
