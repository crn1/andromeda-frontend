import React from 'react';
import { withRouter } from 'react-router-dom';

import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

import EditIcon from '@material-ui/icons/Edit';

const EditItemButton = (props) => {

	const handleClick = () => {
		props.history.push(`${props.page}/${props.itemId}`);
	}

	return (
		<Tooltip title='Edit item'>
			<IconButton
				onClick={() => handleClick()}
				aria-label='EditItem'
				edge='start'
			>
				<EditIcon />
			</IconButton>
		</Tooltip>
	);
}

export default withRouter(EditItemButton);
