import styles from "./secondBlock.module.css";
import image1 from '/src/assets/images/3.png';
import image2 from '/src/assets/images/4.png';
import image3 from '/src/assets/images/5.png';

const SecondBlock = () => {
  return (
    <div className={styles.SecondBlock}>
        <button className={styles.btn1}>PRODUCT CATEGORIES</button>
        <h1>Porcelain Pottery</h1>
        <div className={styles.block}>
            <div className={styles.circle1}>
                <img src={image1} alt="" />
                <br />
                <span>Vases</span>
            </div>
            <div className={styles.circle2}>
                <img src={image2} alt="" />
                <br />
                <span>Mugs</span>
            </div>
            <div className={styles.circle3}>
                <img src={image3} alt="" />
                <br />
                <span>Plates</span>
            </div>
        </div>
    </div>
  )
}

export default SecondBlock