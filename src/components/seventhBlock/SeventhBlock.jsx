import styles from './seventhBlock.module.css'

const SeventhBlock = () => {
  return (
    <div className={styles.block}>
        <img src="/src/assets/images/9.png" alt="" />
        <button className={styles.btn1}>LATEST NEW</button>
        <h1>Latest news / New updates</h1>
        <form action="">
            <input type="email" name="" placeholder="Enter your email" />
            <button type="submit">SUBSCRIBE</button>
        </form>
        <div>
            <input type="checkbox" name="" id="" />
            <p>Sign up for our newsletter</p>
        </div>
    </div>
  )
}

export default SeventhBlock