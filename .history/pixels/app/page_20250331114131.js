import styles from "./page.module.css";


function Product ({name, price = 1.99, image}){
  return (
    <article>
      <img className={styles.productImage} src={image}></img>
      <div className={styles.productInfo}></div>
      <p className={styles.productName}>{name}</p>
      <p className={styles.productPrice}>{price}</p>
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
        <Product name='Cream 0 Broccoli' 
                image='/refried.jpg'/>
                
        <Product name="Chicken Noodle Soup"/>
        <Product name="Turkey Soup"/>

      </main>
    </div>
  );
}
