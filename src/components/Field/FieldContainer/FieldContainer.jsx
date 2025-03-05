import FieldLayout from '../FieldLayout/FieldLayout'
const FieldContainer = props => {
	const { field, currentPlayer, setCurrentPlayer, setField } = props

	const handleClickPlayer = index => {
		const fieldCopy = [...field]
		if (fieldCopy[index] === '') {
			currentPlayer === 'X' ? setCurrentPlayer('O') : setCurrentPlayer('X')
			fieldCopy[index] = currentPlayer
			setField(fieldCopy)
		}
	}
	return (
		<FieldLayout
			field={field}
			handleClickPlayer={handleClickPlayer}
		/>
	)
}
export default FieldContainer
