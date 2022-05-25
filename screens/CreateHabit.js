import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { Formik } from 'formik'
import { globalStyles } from '../styles/global'
import { Dropdown } from '../components/SelectPicker'

export default function CreateHabitForm({navigation}) {
	const [option, setOption] = useState(0)

	const postHabit = async(values) => {
		const newHabit = await fetch('http://192.168.100.137:5000/habits', {
			method: 'POST',
			headers:{'Content-type': 'application/json'}, 
			body: JSON.stringify(values)
		})
		console.log(newHabit)
	}

	const handleCreate = (values) => {
	 values['priority'] = option
	 postHabit(values)
	 navigation.navigate('Home')
	}
	

	return (
		<View style={globalStyles.container}>
			<Formik
				initialValues={{ name: '', description: '', priority: 0 }}
				onSubmit={(values, actions) => {
					actions.resetForm()
					handleCreate(values)
				}}
			>
				{(props) => (
					<View>
						<Text style={globalStyles.label}>Habit Name</Text>
						<TextInput
							style={globalStyles.input}
							placeholder='e.g Wake up early'
							onChangeText={props.handleChange('name')}
							value={props.values.name}
						/>

						<Text style={globalStyles.label}>Description</Text>
						<TextInput
							style={globalStyles.input}
							placeholder='Description'
							onChangeText={props.handleChange('description')}
							value={props.values.description}
						/>

						<Text style={globalStyles.label}>Priority</Text>
						<Dropdown handleValue={(x) => setOption(x)}/>
				
						<Button
							style={globalStyles.button}
							title='Create'
							onPress={props.handleSubmit}
						/>

					</View>

				)}


			</Formik>
		</View>
	)
}

const styles = StyleSheet.create({})