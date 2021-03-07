import Image from 'next/image'
import styles from '../styles/progress-stage.module.sass'

export default function ProgressStage({ stage, displayLine }) {
    return (
        <>
            <div className={`${styles.progressStage} row`}>
                
                <div className={`${styles.item} col-2 offset-1`}>
                    
                    { displayLine && <div className={styles.line} /> }

                    <div className={styles.itemBorder}>
                        <div className={styles.itemSecondBorder}>
                            <Image src={stage.icon} width={96} height={96} />
                        </div>
                    </div>
                    
                </div>

                <div className="heading col-4">
                    <h3>{stage.title}</h3>
                    <p>{stage.description}</p>
                </div>

                <div className="pb-5 col-4">
                    <Image src={stage.image} width={600} height={300} />
                </div>

            </div>
        </>
    )
}