import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/global'
import useFetch from '../hooks/useFetch'
import CardList from '../components/CardList'

export default function HomeScreen() {
	const { loading, data: habits } = useFetch('http://192.168.100.137:5000/habits')
	console.log(habits)

	return (
		<View style={globalStyles.container} >
			<Text style={globalStyles.titleText}>HomeScreen</Text>
			{loading ? <Text style={globalStyles.titleText}>Loading...</Text>
				: habits.map(habit =>
					<CardList
						key={habit._id}
						data={habit}
					/>
				)
			}
		</View>
	)
}

const styles = StyleSheet.create({})