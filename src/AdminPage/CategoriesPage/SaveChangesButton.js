import React from 'react';
import { withRouter } from 'react-router-dom';
import { withSnackbar } from 'notistack';

import Button from '@material-ui/core/Button'

const SaveChangesButton = props => {

	const handleSaveChanges = () => {
		if(props.name.length === 0)
		{
			props.enqueueSnackbar('Please provide category name in order to change it!', { variant: 'error' });
			return;
		}

		props.history.push('/categories');
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
