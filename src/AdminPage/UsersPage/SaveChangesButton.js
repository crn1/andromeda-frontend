import React from 'react';
import { withRouter } from 'react-router-dom';
import { withSnackbar } from 'notistack';

import Button from '@material-ui/core/Button'

import { emailValid, passwordsMatch, passwordValid } from '../Validators';

const SaveChangesButton = props => {

	const handleSaveChanges = () => {
		if(!passwordsMatch(props.password, props.confirmPassword))
		{
			props.enqueueSnackbar('Passwords that you have entered do not match!', { variant: 'error' });
			return;
		}
		if(!emailValid(props.email))
		{
			props.enqueueSnackbar('Email that you have provided is in incorrect format.', { variant: 'error' });
			return;
		}

		let data = {
			fullname: props.fullname,
			email: props.email,
			description: props.description,
		};
		if(props.confirmPassword !== '')
		{
			if(!passwordValid(props.password))
			{
				props.enqueueSnackbar('Password that you have provided is too weak.', { variant: 'error' });
				return;
			}
			data['password'] = props.confirmPassword;
		}
	}

	return (
		<Button
			color='primary'
			variant='contained'
			aria-label='Save Changes'
			onClick={() => handleSaveChanges()}
		>
			Save Changes
		</Button>
	);
}

export default withSnackbar(withRouter(SaveChangesButton));
