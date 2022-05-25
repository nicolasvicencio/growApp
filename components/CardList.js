import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/global'
import { Icircle } from './Icons'

export default function CardList({data}) {
	return (
		<View style={globalStyles.cardList}>
			<Text style={{width: 60}}>{data.name}</Text>
			{Icircle}
			{Icircle}
			{Icircle}
			{Icircle}
			{Icircle}
			{Icircle}
			{Icircle}
		</View>
	)
}