import React from 'react';
import { withRouter } from 'react-router-dom';

import { useTheme, makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

import PersonIcon from '@material-ui/icons/Person';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles(theme => ({
		marginRight: {
			marginRight: theme.spacing(1),
		},
}));

const CurrentUserButton = (props) => {

  const classes = useStyles();
  const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up('md'));

	return (
		<Tooltip title='Edit current user'>
			<IconButton
				className={classes.marginRight}
				onClick={() => props.history.push('/currentUser')}
				color='inherit'
				aria-label='EditCurrentUser'
				edge='start'
			>
				{ matches ? <EditIcon /> : <PersonIcon /> }
			</IconButton>
		</Tooltip>
	);
}

export default withRouter(CurrentUserButton);
