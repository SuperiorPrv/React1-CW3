import styles from "./fifthBlock.module.css"

const FifthBlock = ({data}) => {
  return (
    <div className={styles.block}>
        <button className={styles.btn1}>OUR ONLINE STORE</button>
        <h1>Pottery Collection</h1>
        <div>
            {data.map((e,i)=>{
                return <div key={i}>
                    <img src={e.image} alt="" />
                    <p>{e.name}</p>
                    <h5>${e.price}</h5>
                    <hr />
                </div>
            })}
        </div>
        <button className={styles.btn2}>VIEW ALL PRODUCTS</button>
    </div>
  )
}

export default FifthBlock