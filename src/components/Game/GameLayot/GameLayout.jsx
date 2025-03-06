import FieldContainer from '../../Field/FieldContainer/FieldContainer'
import ButtonRestart from '../../ButtonRestart'
import InformationContainer from '../../Information/InfromationContainer/InformationContainer'

const GameLayout = ({ state, handleClickPlayer, btnRestart }) => {

	return (
		<>
			<InformationContainer
				{...state}
			/>
			<FieldContainer
				field={state.field}
				handleClickPlayer={handleClickPlayer}
			/>
			{(state.isGameEnded || state.isDraw) && <ButtonRestart btnRestart={btnRestart} />}

		</>
	)
}
export default GameLayout
