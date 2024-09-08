import styles from './sixthBlock.module.css'

const SixthBlock = () => {
  return (
    <div className={styles.block}>
        <div>
            <button className={styles.btn1}>POMPEO POTTERY</button>
            <h2>Ready to start shopping?</h2>
            <p>Lorem ipsum dolor sit amet, <span className={styles.sp}>consectetur adipiscing elit</span> . Suspendisse varius enim in eros elementum.</p>
            <button className={styles.btn2}>NEW COLLECTION</button>
        </div>
    </div>
  )
}

export default SixthBlock