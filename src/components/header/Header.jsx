import styles from "./header.module.css"

const Header = () => {
    return (
    <div className={styles.header}>
        <h2>Pompeo</h2>
        <div>
            <a href="">HOME</a>
            <a href="">ABOUT</a>
            <a href="">SHOP</a>
            <a href="">CONTACT</a>
            <a href="">Cart</a>
        </div>
    </div>
    )
}

export default Header;