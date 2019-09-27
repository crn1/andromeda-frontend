import React from 'react';

import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';

import PersonIcon from '@material-ui/icons/AccountCircle';

const UsernameTextField = props => {

	const handleChange = event => {
    props.setUsernameValue(event.target.value);
  };

	return (
		<TextField
			label='Enter your email'
			type='text'
			value={props.usernameValue}
			fullWidth
			onChange={(event) => handleChange(event)}
			InputProps={{
				endAdornment: (
					<InputAdornment position='end'>
						<PersonIcon />
					</InputAdornment>
				),
			}}
		/>
	);
}

export default UsernameTextField;
