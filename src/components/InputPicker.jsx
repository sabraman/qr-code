import { useState } from 'react';
import { ChromePicker } from 'react-color';

function InputPicker({ id, label, customColor, handleQrCustom }) {
	const [showPicker, setShowPicker] = useState(false)
	const handleShowPicker = () => setShowPicker(!showPicker);

	return (
		<div>
			<input
				id={id}
				name={id}
				aria-label={id}
				type="button"
				style={{ background: customColor }}
				onClick={handleShowPicker}
			/>
			<label htmlFor={id}>Customize {label}</label>
				{showPicker &&
				
					<ChromePicker
						presetColors={['#000000', '#FFFFFF']}
						color={customColor}
						onChange={handleQrCustom}
					/>
				}
		</div>
	);
}

export default InputPicker;