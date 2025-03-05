import { useState, useEffect } from 'react'
import GameLayout from '../GameLayot/GameLayout'
const GameContainer = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X')
	const [isGameEnded, setIsGameEnded] = useState(false)
	const [isDraw, setIsDraw] = useState(false)
	const [field, setField] = useState(['', '', '', '', '', '', '', '', ''])
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
	useEffect(() => {
		const checkWinPlayer = () => {
			let isWinner = false

			isWinner = WIN_PATTERNS.some(pattern => {
				const [a, b, c] = pattern

				if (
					field[a] &&
					field[a] === field[b] &&
					field[a] === field[c]
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
		checkWinPlayer()
	}, [field])

	const btnRestart = () => {
		setCurrentPlayer('X')
		setIsGameEnded(false)
		setIsDraw(false)
		setField(['', '', '', '', '', '', '', '', ''])
	}
	return (
		<GameLayout
			currentPlayer={currentPlayer}
			setCurrentPlayer={setCurrentPlayer}
			isGameEnded={isGameEnded}
			setIsGameEnded={setIsGameEnded}
			isDraw={isDraw}
			setIsDraw={setIsDraw}
			field={field}
			setField={setField}
			btnRestart={btnRestart}
		/>
	)
}
export default GameContainer
