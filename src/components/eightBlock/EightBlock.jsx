import styles from './eightBlock.module.css';
import image1 from '/src/assets/images/10.png';
import image2 from '/src/assets/images/11.png';
import image3 from '/src/assets/images/12.png';

const EightBlock = () => {
  return (
    <div className={styles.block}>
        <h1>Pompeo</h1>
        <p>I have always striven to fix beauty in wood, stone, glass or pottery, that has been my creed.</p>
        <div>
            <div>
                <img src={image1} alt="" className={styles.ii} />
                <h5>Email</h5>
                <p>pompeopotery@gmail.com</p>
            </div>
            <div>
                <img src={image2} alt="" className={styles.ii}  />
                <h5>Find</h5>
                <p>Central Park, Manhattan <br /> New York, 1101</p>
            </div>
            <div>
                <img src={image3} alt=""  className={styles.ii} />
                <h5>Call</h5>
                <p>+1 292 345 678</p>
            </div>
        </div>
        <p>Template design by <span className={styles.sp1}>Dorian Hoxha</span> - <span className={styles.sp1}>Image License Info</span> Powered by <span  className={styles.sp1}>Webflow</span></p>
    </div>
  )
}

export default EightBlock