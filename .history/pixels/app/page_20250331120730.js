import styles from "./page.module.css";
import Product from "@/_ui/Product/product"; 





export default function Home() {
  return (
    <div>
      <header className={styles.header}>
        <h1 className={styles.header__title}>My trinkets😍</h1>
      </header>
      <main className={styles.main}>
        <div className={styles.productList}>
        <Product 
          name='Cream 0 Broccoli' 
          image='/refried.jpg'/>

        <Product 
          name="Chicken Noodle Soup" 
          image='/chickennoodle.jpg'
          hasSale={true}/>

        <Product 
          name="Turkey Soup"
          image='/refried.jpg'/>
        </div>

      </main>
    </div>
  );
}
