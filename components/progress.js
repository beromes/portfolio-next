import styles from '../styles/progress.module.sass'
import progressStages from '../data/progress.json';
import ProgressStage from './progress-stage';

export default function Progress() {

    return (
        <>
            <div className={styles.progress}>
                { progressStages.map((stage, index) => 
                    <ProgressStage key={index}
                        stage={stage} 
                        displayLine={index < progressStages.length - 1} />
                ) }
            </div>
        </>
    )
}
