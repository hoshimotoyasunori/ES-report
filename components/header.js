import styles from '../styles/header.module.css'

export default function Header() {
    return (
        <div className={styles.container}>
            <h2>ES-report</h2>
            <div className={styles.box}>
                <button className={styles.button}>定時連絡</button>
                <button className={styles.button}>現着報告</button>
                <button className={styles.button}>ご意見・ご要望</button>
            </div>
        </div>
    )
  }
  