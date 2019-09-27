import React from 'react';
import { withRouter } from 'react-router-dom';
import { withSnackbar } from 'notistack';
import axios from 'axios';

import Button from '@material-ui/core/Button'

import { emailValid, passwordsMatch, passwordValid } from '../Validators';

const SaveChangesButton = props => {

	const changeUserRoles = () => {
		for(var i = 0; i < props.roles.length; i++)
		{
			if(props.roles[i].selected && props.roles[i].userRoleId === null)
			{
				axios({
					method: 'POST',
					url: 'http://localhost:5000/userrole',
					headers: {'Content-Type': 'application/json'},
					data: {
						user_id: props.userId,
						role_id: props.roles[i].id,
					},
				}).catch(error => {
					props.enqueueSnackbar(`There is a network problem. Please try again later (${error}).`, { variant: 'error' });
				});
				continue;
			}
			if(!props.roles[i].selected && props.roles[i].userRoleId !== null)
			{
				axios.delete(`http://localhost:5000/userrole/${props.roles[i].userRoleId}`)
					.catch(error => {
						props.enqueueSnackbar(`There is a network problem. Please try again later (${error}).`, { variant: 'error' });
				});
				continue;
			}
		}
	}

	const setUserRoles = (userId) => {
		for(var i = 0; i < props.roles.length; i++)
		{
			if(props.roles[i].selected)
			{
				axios({
					method: 'POST',
					url: 'http://localhost:5000/userrole',
					headers: {'Content-Type': 'application/json'},
					data: {
						user_id: userId,
						role_id: props.roles[i].id,
					},
				}).catch(error => {
					props.enqueueSnackbar(`There is a network problem. Please try again later (${error}).`, { variant: 'error' });
				});
				continue;
			}
		}
	}

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

		axios({
			method: props.method,
			url: props.method === 'POST' ?
				`http://localhost:5000/user` :
				`http://localhost:5000/user/${props.userId}`,
			headers: {'Content-Type': 'application/json'},
			data: data,
		}).then(res =>
		{

			if(props.method === 'PATCH')
			{
				changeUserRoles();
			}else if (props.method === 'POST'){
				setUserRoles(res.data.data.id)
			}

			props.enqueueSnackbar(res.data.message, { variant: res.data.status });
			if(res.data.status === 'success' && props.match.url !== '/users/current')
			{
				props.history.push('/users');
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
