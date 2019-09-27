import React, { useGlobal } from 'reactn';

import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import LogoutButton from './LogoutButton';
import CurrentUserButton from './CurrentUserButton';

const useStyles = makeStyles(theme => ({
	userMarginRight: {
		marginRight: theme.spacing(3),
	},
	avatar: {
		[theme.breakpoints.up('sm')]: {
			marginRight: theme.spacing(1),
		},
		[theme.breakpoints.down('sm')]: {
			marginRight: theme.spacing(3),
		},
		height: 36,
		width: 36,
	},
}));

const UserInfo = (props) => {

  const classes = useStyles();

	const [currentUser] = useGlobal('currentUser');

	return (
		<>
			<Hidden smDown>

				<Avatar className={ classes.avatar } />

				<Typography className={classes.userMarginRight}>
					{ currentUser.fullname }
				</Typography>

			</Hidden>

			<CurrentUserButton />
			<LogoutButton />
		</>
	);
}

export default UserInfo;
