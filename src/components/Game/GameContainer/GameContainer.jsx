import { useState } from 'react'
import GameLayout from '../GameLayot/GameLayout'
const GameContainer = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X')
	const [isGameEnded, setIsGameEnded] = useState(false)
	const [isDraw, setIsDraw] = useState(false)
	const [field, setField] = useState(new Array(9).fill(''))
	const state = {
		field,
		currentPlayer,
		isDraw,
		isGameEnded,
	}

	const WIN_PATTERNS = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8], // Варианты побед по горизонтали
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8], // Варианты побед по вертикали
		[0, 4, 8],
		[2, 4, 6], // Варианты побед по диагонали
	]



	const checkWinPlayer = (fieldCopy) => {

		return WIN_PATTERNS.some(pattern => {

			const [a, b, c] = pattern

			return fieldCopy[a] && fieldCopy[a] === fieldCopy[b] && fieldCopy[a] === fieldCopy[c]

		})

	}

	const handleClickPlayer = index => {
		let fieldCopy = [...field]
		if (fieldCopy[index] === '') {
			setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')
			fieldCopy[index] = currentPlayer
			setField(fieldCopy)

			let winner = checkWinPlayer(fieldCopy)
			if (winner) {
				setCurrentPlayer(currentPlayer)
				setIsGameEnded(true)
			}
			if (fieldCopy.every(item => item !== '') && !winner) {
				setIsDraw(true)
			}


		}


	}
	const btnRestart = () => {
		setCurrentPlayer('X')
		setIsGameEnded(false)
		setIsDraw(false)
		setField(['', '', '', '', '', '', '', '', ''])
	}

	return (
		<GameLayout
			state={state}
			handleClickPlayer={handleClickPlayer}
			btnRestart={btnRestart}
		/>
	)
}

export default GameContainer
