import styles from "./firstBlock.module.css"

const FirstBlock = () => {
  return (
    <div className={styles.FirstBlock}>
        <div className={styles.left}>
            <button className={styles.btn1}>POMPEO POTTERY</button>
            <h1>Unique Porcelain Stone Collection</h1>
            <p>Unique & modern pottery made by our master in porcelain & stones</p>
            <button className={styles.btn2}>SHOP COLLECTION</button>
        </div>
        <div className={styles.right}>
            <img src="/src/assets/images/1.png" alt="" />
        </div>
    </div>
  )
}

export default FirstBlock