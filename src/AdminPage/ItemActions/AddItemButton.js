import React from 'react';
import { withRouter } from 'react-router-dom';

import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';

import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
	fab: {
    position: 'fixed',
		[theme.breakpoints.up('sm')]: {
			bottom: theme.spacing(4),
			right: theme.spacing(4),
		},
		[theme.breakpoints.down('md')]: {
			bottom: theme.spacing(2),
			right: theme.spacing(2),
		},
  },
}));

const AddItemButton = props => {

	const classes = useStyles();

	const handleClick = () => {
		props.history.push(`${props.path}/new`);
	}

	return (
		<Fab className={classes.fab} color='primary' onClick={() => handleClick()}>
			<AddIcon />
		</Fab>
	);
}

export default withRouter(AddItemButton);
