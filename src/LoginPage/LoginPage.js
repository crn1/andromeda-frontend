import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import UsernameTextField from './UsernameTextField';
import PasswordTextField from './PasswordTextField';
import LoginButton from './LoginButton';
import RememberMe from './RememberMe';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
	backgroundLarge: {
		backgroundImage: 'url(http://getwallpapers.com/wallpaper/full/6/3/c/541322.jpg)',
	},

	background: {
		textAlign: 'center',
		align: 'center',
		height: '100%',
	},

	containerSmall: {
		height: '100vh',
	},

	containerLarge: {
		paddingTop: '10vh',
	},

	item: {
		padding: 16,
		backgroundColor: '#FFF',
	},

	logo: {
		paddingTop: theme.spacing(8),
		marginBottom: theme.spacing(8),
	},
}));

const LoginPage = (props) => {

	const [usernameValue, setUsernameValue] = useState('');
	const [passwordValue, setPasswordValue] = useState('');
	const [rememberMeChecked, setRememberMeChecked] = useState(false);

	const classes = useStyles();

	return (
		<div
			className={clsx(
				classes.background,
				isWidthUp('md', props.width) && classes.backgroundLarge
			)}
		>
			<Grid container
				className={clsx(
					isWidthUp('md', props.width) ?
						classes.containerLarge :
						classes.containerSmall
				)}
				justify='center'
			>
				<Grid item
					className={classes.item}
					xs={12} sm={6} lg={3} xl={2}
				>
					<Typography component='div' className={classes.logo} variant='h4'>
						ANDROMEDA
						<Typography component='p' variant='caption'>
							Pre-alpha
						</Typography>
					</Typography>

					<UsernameTextField
						usernameValue={usernameValue}
						setUsernameValue={setUsernameValue}
					/>
					<PasswordTextField
						passwordValue={passwordValue}
						setPasswordValue={setPasswordValue}
					/>
					<RememberMe
						rememberMeChecked={rememberMeChecked}
						setRememberMeChecked={setRememberMeChecked}
					/>
					<LoginButton
						usernameValue={usernameValue}
						passwordValue={passwordValue}
						rememberMeChecked={rememberMeChecked}
					/>

				</Grid>
			</Grid>
		</div>
	);
}

export default withWidth()(withRouter(LoginPage));
