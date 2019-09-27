import React, { useGlobal } from 'reactn';
import { withRouter } from 'react-router-dom';
import { withSnackbar } from 'notistack';
import qs from 'querystring';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
	button: {
		marginTop: theme.spacing(4),
		marginBottom: theme.spacing(2),
		float: 'center',
	}
}));

const LoginButton = props => {

	const classes = useStyles();

	const [currentUser, setCurrentUser] = useGlobal('currentUser');

	const handleLogin = () => {
		axios({
			method: 'POST',
			url: 'http://localhost:5000/user/login',
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			data: qs.stringify({
				email: props.usernameValue,
				password: props.passwordValue,
				remember: props.rememberMeValue,
			}),
		}).then(res =>
		{
			if(res.data.status === 'success')
			{
				setCurrentUser({ ...currentUser,
					authenticated: true,
					id: res.data.data.id,
					fullname: res.data.data.fullname,
					email: res.data.data.email,
					description: res.data.data.description,
					roles: res.data.data.roles,
				});
				props.history.push('/');
			}else{
				props.enqueueSnackbar(res.data.message, { variant: 'error' });
			}
		}).catch(error =>
		{
			props.enqueueSnackbar(`There is a network problem. Please try again later (${error}).`, { variant: 'error' });
		});
	}

	return (
		<Button
			className={classes.button}
			color='primary'
			variant='contained'
			aria-label='Login'
			onClick={() => handleLogin()}
		>
			Login
		</Button>
	);
}

export default withRouter(withSnackbar(LoginButton));
