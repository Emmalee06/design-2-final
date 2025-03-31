
import styles from "./product.module.css"
function Product ({name, price = 1.99, image, hasSale}){
    let calculatedPrice = hasSale ? (price/2).toFixed(2) : price;
  
    let priceStyles = hasSale ? styles.productPrice__sale : null;
  
    return (
      <article>
        <img className={styles.productImage} src={image}></img>
        <div className={styles.productInfo}></div>
        <p className={styles.productName}>{name}</p>
        <p className={styles.priceStyles}>{calculatedPrice}</p>
      </article>
    );
    }

export default product;