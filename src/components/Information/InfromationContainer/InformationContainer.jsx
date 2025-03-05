import InformationLayout from '../InFormationLayout/InformationLayout'
const InformationContainer = props => {
	const { currentPlayer, isGameEnded, isDraw } = props
	return (
		<InformationLayout
			currentPlayer={currentPlayer}
			isGameEnded={isGameEnded}
			isDraw={isDraw}
		/>
	)
}
export default InformationContainer
