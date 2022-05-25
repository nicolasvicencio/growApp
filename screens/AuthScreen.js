import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../styles/global'
import { Formik } from 'formik'
import useFetch from '../hooks/useFetch'
import { useNavigation } from '@react-navigation/native'

export const LogIn = () => {
	const { loading, data } = useFetch('http://192.168.100.137:5000/users')
	const navigation = useNavigation()

	const handleSubmit = (values) => {
		data.map(x => {
			if (!x.email === values.email) return console.log('user not found')
			if (!x.password === values.password) return console.log('password incorrect')
			navigation.navigate('TabMain', { _id: x._id })
		})
	}


	return (
		<View style={globalStyles.container}>

			<View style={globalStyles.containerLogIn}>
				<View style={globalStyles.card}>
					<Text style={globalStyles.cardTitle}>Hi there!</Text>
					<Formik
						initialValues={{ email: '', password: '' }}
						onSubmit={(values, actions) => {
							actions.resetForm()
							handleSubmit(values)
						}}
					>
						{(props) => (
							<View style={globalStyles.cardBody}>
								<Text style={globalStyles.label}>Email</Text>
								<TextInput
									style={globalStyles.input}
									placeholder='email'
									onChangeText={props.handleChange('email')}
									value={props.values.email}
								/>

								<Text style={globalStyles.label}>Password</Text>
								<TextInput
									style={globalStyles.input}
									secureTextEntry={true}
									placeholder='password'
									onChangeText={props.handleChange('password')}
									value={props.values.password}
								/>

								<Button
									title='Log In'
									onPress={props.handleSubmit}
								/>
								<View>
									<Text style={globalStyles.link} onPress={() => navigation.navigate('SingIn')}>Create Account</Text>
									<Text style={globalStyles.link}>I forgot my password</Text>
								</View>
							</View>
						)}
					</Formik>
				</View>
			</View>
		</View>
	)
}


