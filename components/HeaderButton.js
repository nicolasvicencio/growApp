import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core'

export default function HeaderButton({icon , screen}) {
	const navigation = useNavigation()
	return (
		<TouchableOpacity
		onPress={() => navigation.navigate(screen)}
		>
			{icon}
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({})