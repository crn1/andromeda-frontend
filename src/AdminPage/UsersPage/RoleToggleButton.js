import React from 'react';

import ToggleButton from '@material-ui/lab/ToggleButton';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
	label: {
		color: 'black',
	},
}));

const RoleToggleButton = (props) => {

	const classes = useStyles();

	return (
		<ToggleButton
				classes={{ label: clsx(props.selected ? classes.label : null) }}
				value='check'
				selected={props.selected}
				onChange={props.handleRoleChange}>
			{ props.children }
		</ToggleButton>
	);
}

export default RoleToggleButton;
