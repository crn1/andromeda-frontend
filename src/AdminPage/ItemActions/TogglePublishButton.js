import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { withSnackbar } from 'notistack';

import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

import ConfirmTogglePublishDialog from './ConfirmTogglePublishDialog';

const TogglePublishButton = (props) => {

  const [dialogOpen, setDialogOpen] = useState(false);

	const handleToggle = () => {
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
