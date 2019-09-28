import React, { useGlobal } from 'reactn';
import { withRouter } from 'react-router-dom';

import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

import ExitIcon from '@material-ui/icons/ExitToApp';

const LogoutButton = (props) => {

	const [currentUser, setCurrentUser] = useGlobal('currentUser');

	const resetCurrentUser = () => {
		setCurrentUser({ ...currentUser,
			authenticated: false,
			id: null,
			fullname: '',
			email: '',
			description: '',
			roles: [],
		});
	}

	const handleLogout = () => {
		resetCurrentUser();
		props.history.push('/login');
	}

	return (
		<Tooltip title='Logout'>
			<IconButton
				onClick={() => handleLogout()}
				color='inherit'
				aria-label='Logout'
				edge='start'
			>
				<ExitIcon />
			</IconButton>
		</Tooltip>
	);
}

export default withRouter(LogoutButton);
