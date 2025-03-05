import styles from './informationLayout.module.css'
const InformationLayout = props => {
	const { currentPlayer, isGameEnded, isDraw } = props
	return (
		<>
			{isDraw && <div className={styles.information}>Ничья</div>}
			{!isDraw && isGameEnded && (
				<div className={styles.information}>
					Выйграл: ( {currentPlayer} ) игрок
				</div>
			)}
			{!isDraw && !isGameEnded && (
				<div className={styles.information}>
					Ходит: ( {currentPlayer} ) игрок
				</div>
			)}
		</>
	)
}
export default InformationLayout
