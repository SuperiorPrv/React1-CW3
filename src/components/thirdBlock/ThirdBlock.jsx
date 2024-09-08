import styles from "./thirdBlock.module.css"

const ThirdBlock = () => {
  return (
    <div className={styles.block}>
        <div className={styles.block1}>
            <h2>Hand Grafted Pottery since 1990</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.</p>
        </div>
        <div className={styles.block1}>
            <h2>We Provide Premium Pottery Produts</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.</p>
        </div>
    </div>
  )
}

export default ThirdBlock