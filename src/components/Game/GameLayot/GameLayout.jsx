import FieldContainer from '../../Field/FieldContainer/FieldContainer'
import ButtonRestart from '../../ButtonRestart'
import InformationContainer from '../../Information/InfromationContainer/InformationContainer'

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
			{(isGameEnded || isDraw) && <ButtonRestart btnRestart={btnRestart} />}

		</>
	)
}
export default GameLayout
