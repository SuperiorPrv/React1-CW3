import styles from './fourthBlock.module.css'

const FourthBlock = ({image,title,desc,direction}) => {
  if(direction=="left"){
    return (
      <div className={styles.block}>
          <div>   
              <img src={image} alt="" />
          </div>
          <div>
                <h1>{title}</h1>
                <p>{desc}</p>
                <button>View Details</button>
          </div>
      </div>
    )
  }
  else{
    return (
      <div className={styles.block}>
          <div>
                <h1>{title}</h1>
                <p>{desc}</p>
                <button>View Details</button>
          </div>
          <div>   
              <img src={image} alt="" />
          </div>
      </div>
    )
  }
}

export default FourthBlock