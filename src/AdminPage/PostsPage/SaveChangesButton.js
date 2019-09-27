import React from 'react';
import { withRouter } from 'react-router-dom';
import { withSnackbar } from 'notistack';
import axios from 'axios';

import Button from '@material-ui/core/Button'

const SaveChangesButton = props => {

	const handleSaveChanges = () => {
		if(props.title.length === 0)
		{
			props.enqueueSnackbar('Please provide a category title!', { variant: 'error' });
			return;
		}

		let data = {
			title: props.title,
			category_id: props.categoryId,
			author_id: props.authorId,
			date: props.date,
			content: props.content,
			description: props.description,
		}
		axios({
			method: props.method,
			url: props.method === 'POST' ?
				`http://localhost:5000/post` :
				`http://localhost:5000/post/${props.match.params.postId}`,
			headers: {'Content-Type': 'application/json'},
			data: data,
		}).then(res =>
		{
			props.enqueueSnackbar(res.data.message, { variant: res.data.status });
			if(res.data.status === 'success')
			{
				props.history.push('/posts');
			}
		}).catch(error =>
		{
			props.enqueueSnackbar(`There is a network problem. Please try again later (${error.data.message}).`, { variant: 'error' });
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
