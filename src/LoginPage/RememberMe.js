import React from 'react';

import { makeStyles } from '@material-ui/core/styles'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
	padding: {
		paddingTop: theme.spacing(2),
	},
}));

const LoginButton = props => {

	const classes = useStyles();

	const handleChange = () => {
		props.setRememberMeChecked(!props.rememberMeChecked);
	}

	return (
		<FormGroup row className={classes.padding}>
			<FormControlLabel
				control={
					<Checkbox
						checked={props.rememberMeChecked}
						onChange={() => handleChange()}
						value='Remember me'
						color='primary'
					/>
				}
				label='Remember me'
			/>
		</FormGroup>
	);
}

export default LoginButton;
