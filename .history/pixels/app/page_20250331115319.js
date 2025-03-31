import styles from "./page.module.css";


function Product ({name, price = 1.99, image, hasSale}){
  let calculatedPrice = hasSale ? (price/2).toFixed(2) : price;

  let priceStyles = hasSale ? styles.productPrice__sale : null;

  return (
    <article>
      <img className={styles.productImage} src={image}></img>
      <div className={styles.productInfo}></div>
      <p className={styles.productName}>{name}</p>
      <p className={styles.pricedStyles}>{calculatedPrice}</p>
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
