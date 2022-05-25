import {StyleSheet} from 'react-native'

export const globalStyles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
	},
	containerLogIn:{
		flex: 1,
		padding: 24,
		justifyContent: 'center',
		alignItems: 'center'	
	},
	card:{
		width: '110%',
		height: '70%',
		margin: 'auto',
		backgroundColor: 'white',
		shadowColor: '#333',
		shadowOffset: 3,
		shadowOpacity: 1,
		borderRadius: 10
	},
	cardTitle: {
		fontSize: 26,
		paddingVertical: 20,
		textAlign: 'center'
	},
	cardBody:{
		padding: 20

	},
	cardList: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginVertical: 10,
		padding: 20,
		borderColor: '#ccc',
		borderWidth: 0.5,
		backgroundColor: 'white',
		borderRadius: 10,

	},
	titleText: {
		fontSize: 18,
		color: '#333'
	},
	input: {
		borderWidth: 1,
		borderColor: '#ddd',
		padding: 10,
		fontSize: 15,
		borderRadius: 7,
		marginVertical: 6,
		marginBottom: 15
	},
	label : {
		fontSize: 16,
		color: '#333',
		paddingLeft: 3
	},
	select: {
		borderWidth: 1,
		borderColor: 'black',
	},
	button: {
		padding: 20,
		marginVertical: 8,
		color: 'silver',
		backgroundColor: 'red',
		borderRadius: 6
	},
	link: {
		color: 'blue',
		paddingTop: 20
	}

})