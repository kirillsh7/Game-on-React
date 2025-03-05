import styles from './FieldLayot.module.css'
const FieldLayout = ({ field, handleClickPlayer }) => {
	return (
		<div className={styles.field}>
			{field.map((square, index) => (
				<span
					style={{
						border: '1px solid red',
						padding: '15px',
					}}
					key={index}
					id={index}
					onClick={handleClickPlayer.bind(null, index)}
				>
					{square}
				</span>
			))}
		</div>
	)
}
export default FieldLayout
