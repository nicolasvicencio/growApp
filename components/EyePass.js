import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ieye } from './Icons'

export default function EyePass() {
	return (
		<View>
			<TouchableOpacity>
				<Text><Ieye/>.</Text>
			</TouchableOpacity>
		</View>
	)
}