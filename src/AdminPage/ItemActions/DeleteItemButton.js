import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { withSnackbar } from 'notistack';
import axios from 'axios';

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
		axios({
			method: 'DELETE',
			url: `http://localhost:5000/${props.target}/${props.itemId}`,
		}).then(res =>
		{
			props.enqueueSnackbar(res.data.message, { variant: res.data.status });
			if(res.data.status === 'success')
			{
				props.setData(props.data.filter(item => item.id !== props.itemId));
			}
		}).catch(error => {
			props.enqueueSnackbar(`There is a network problem. Please try again later (${error}).`, { variant: 'error' });
		})
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
