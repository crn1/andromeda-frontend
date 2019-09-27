import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { withSnackbar } from 'notistack';
import axios from 'axios';

import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

import ConfirmTogglePublishDialog from './ConfirmTogglePublishDialog';

const TogglePublishButton = (props) => {

  const [dialogOpen, setDialogOpen] = useState(false);

	const handleToggle = () => {
		axios({
			method: 'GET',
			url: `http://localhost:5000/post/${props.itemId}/toggle_publish`,
		}).then(res =>
		{
			props.enqueueSnackbar(res.data.message, { variant: res.data.status });
			if(res.data.status === 'success')
			{
				props.setData(props.data.map(item => {
					if(item.id === props.itemId)
					{
						return { ...item, is_published: !item.is_published }
					}
					return item;
				}));
			}
		}).catch(error => {
			props.enqueueSnackbar(`There is a network problem. Please try again later (${error}).`, { variant: 'error' });
		})
	}

	return (
		<>
			<Tooltip title={ props.isPublished ? 'Unpublish this post' : 'Publish this post' }>
				<IconButton
					onClick={() => setDialogOpen(true)}
					aria-label='TogglePublishButton'
					edge='start'
				>
					{ props.isPublished ? <VisibilityOffIcon /> : <VisibilityIcon color='secondary' /> }
				</IconButton>
			</Tooltip>

			<ConfirmTogglePublishDialog
				open={dialogOpen}
				setOpen={setDialogOpen}
				handleToggle={handleToggle}
				isPublished={props.isPublished}
			/>
		</>
	);
}

export default withRouter(withSnackbar(TogglePublishButton));
