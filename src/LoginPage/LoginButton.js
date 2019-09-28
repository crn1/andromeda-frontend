import React, { useGlobal } from 'reactn';
import { withRouter } from 'react-router-dom';
import { withSnackbar } from 'notistack';

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
		if(props.usernameValue == 'john@yourcompany.com' && props.passwordValue == 'veryweakpassword')
		{
			setCurrentUser({ ...currentUser,
				authenticated: true,
				id: 1,
				fullname: 'John Smith',
				email: 'john@yourcompany.com',
				description: 'This is description of John. He is very nice fella.',
				roles: ['ADMIN'],
			});
			props.history.push('/');
		}else{
			props.enqueueSnackbar('You provided wrong email or/and password.', { variant: 'error' });
		}
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
