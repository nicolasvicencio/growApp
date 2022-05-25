import RNPickerSelect from 'react-native-picker-select';
import { globalStyles } from '../styles/global';

export const Dropdown = ({handleValue}) => {
	return (
		<RNPickerSelect
			style={globalStyles.select}
			onValueChange={(value) => handleValue(value)}
			items={[
				{ label: 'Not important', value: 1 },
				{ label: 'Neutral', value: 2 },
				{ label: 'Really important', value: 3 },
			]}
		/>
	);
};