import { useState } from 'react'
import GameLayout from '../GameLayot/GameLayout'
const GameContainer = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X')
	const [isGameEnded, setIsGameEnded] = useState(false)
	const [isDraw, setIsDraw] = useState(false)
	const [field, setField] = useState(['', '', '', '', '', '', '', '', ''])
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
		let isWinner = false

		isWinner = WIN_PATTERNS.some(pattern => {
			const [a, b, c] = pattern

			if (
				fieldCopy[a] &&
				fieldCopy[a] === fieldCopy[b] &&
				fieldCopy[a] === fieldCopy[c]
			) {
				setCurrentPlayer(field[a])
				setIsGameEnded(true)
				return true
			}
			return false
		})

		if (!isWinner && !field.includes('')) {
			setIsDraw(true)
			setIsGameEnded(true)

		}

	}



	const handleClickPlayer = index => {
		const fieldCopy = [...field]
		if (fieldCopy[index] === '') {
			setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')
			fieldCopy[index] = currentPlayer
			setField(fieldCopy)
		}
		checkWinPlayer(fieldCopy)
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
