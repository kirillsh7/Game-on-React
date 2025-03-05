import FieldContainer from '../../Field/FieldContainer/FieldContainer'
import InformationContainer from '../../Information/InfromationContainer/InformationContainer'
import styles from './GameLayot.module.css'
const GameLayout = props => {
	const {
		currentPlayer,
		setCurrentPlayer,
		isGameEnded,
		setIsGameEnded,
		isDraw,
		setIsDraw,
		field,
		setField,
		btnRestart
	} = props

	return (
		<>
			<InformationContainer
				currentPlayer={currentPlayer}
				isGameEnded={isGameEnded}
				isDraw={isDraw}
			/>
			<FieldContainer
				currentPlayer={currentPlayer}
				setCurrentPlayer={setCurrentPlayer}
				field={field}
				setField={setField}
				setIsGameEnded={setIsGameEnded}
				setIsDraw={setIsDraw}
			/>
			{isDraw && !isGameEnded && (
				<button onClick={btnRestart} className={styles.btnRestart}>Начать Заново</button>
			)}
		</>
	)
}
export default GameLayout
