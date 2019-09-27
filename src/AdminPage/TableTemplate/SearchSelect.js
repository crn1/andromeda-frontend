import React from 'react';

import Select from 'react-select-material-ui';

const SearchSelect = (props) => {

	const handleChange = (value) => {
		props.setItemId(value);
	}

	return <Select
		fullWidth
		options={props.options}
		onChange={(value) => handleChange(value)}
		defaultValue={String(props.itemId)}
		label={props.label}
		SelectProps={{ isClearable: true }}
	/>
}

export default SearchSelect;
