import styles from './Game/GameLayot/GameLayot.module.css'
const ButtonRestart = props => {
	const { btnRestart } = props
	return (
		<button className={styles.btnRestart} onClick={btnRestart}>
			Начать заново
		</button>
	)
}
export default ButtonRestart