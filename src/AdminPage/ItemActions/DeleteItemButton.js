import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { withSnackbar } from 'notistack';

import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

import DeleteIcon from '@material-ui/icons/Delete';

import ConfirmDeleteDialog from './ConfirmDeleteDialog';

const DeleteItemButton = (props) => {

  const [dialogOpen, setDialogOpen] = useState(false);

	const handleConfirmation = () => {
		if(props.confirmAction)
		{
			setDialogOpen(true);
		}else{
			props.handleDelete();
		}
	}

	const handleDelete = () => {
		props.setData(props.data.filter(item => item.id !== props.itemId));
	}

	return (
		<>
			<Tooltip title='Delete item'>
				<IconButton
					onClick={() => handleConfirmation()}
					aria-label='DeleteItem'
					edge='start'
				>
					<DeleteIcon />
				</IconButton>
			</Tooltip>

			<ConfirmDeleteDialog
				open={dialogOpen}
				setOpen={setDialogOpen}
				handleDelete={handleDelete}
			/>
		</>
	);
}

export default withRouter(withSnackbar(DeleteItemButton));
