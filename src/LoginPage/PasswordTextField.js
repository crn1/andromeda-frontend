import React from 'react';

import { makeStyles } from '@material-ui/core/styles'
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import KeyIcon from '@material-ui/icons/VpnKey';

const useStyles = makeStyles(theme => ({
	field: {
		marginTop: theme.spacing(2),
	}
}));

const PasswordTextField = props => {

	const classes = useStyles();

	const handleChange = event => {
    props.setPasswordValue(event.target.value);
  };

	return (
		<TextField
			className={classes.field}
			label='Enter your password'
			fullWidth
			type='password'
			value={props.passwordValue}
			onChange={(event) => handleChange(event)}
			InputProps={{
				endAdornment: (
					<InputAdornment position='end'>
						<KeyIcon />
					</InputAdornment>
				),
			}}
		/>
	);
}

export default PasswordTextField;
