import React from 'react';
import { withRouter } from 'react-router-dom';
import { withSnackbar } from 'notistack';
import axios from 'axios';

import Button from '@material-ui/core/Button'

const SaveChangesButton = props => {

	const handleSaveChanges = () => {
		if(props.name.length === 0)
		{
			props.enqueueSnackbar('Please provide category name in order to change it!', { variant: 'error' });
			return;
		}

		axios({
			method: props.method,
			url: props.method === 'POST' ?
				`http://localhost:5000/category` :
				`http://localhost:5000/category/${props.match.params.categoryId}`,
			headers: {'Content-Type': 'application/json'},
			data: { name: props.name },
		}).then(res =>
		{
			props.enqueueSnackbar(res.data.message, { variant: res.data.status });
			if(res.data.status === 'success')
			{
				props.history.push('/categories');
			}
		}).catch(error =>
		{
			props.enqueueSnackbar(`There is a network problem. Please try again later (${error}).`, { variant: 'error' });
		});
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
