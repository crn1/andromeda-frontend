import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ConfirmTogglePublishDialog = (props) => {

  const handleClose = () =>
	{
    props.setOpen(false);
  }

  const handleCloseDelete = () =>
	{
    props.setOpen(false);
		props.handleToggle();
  }

  return (
		<Dialog
			open={props.open}
			TransitionComponent={Transition}
			keepMounted
			onClose={handleClose}
			aria-labelledby='alert-dialog-slide-title'
			aria-describedby='alert-dialog-slide-description'
		>
			<DialogTitle id='alert-dialog-slide-title'>{props.isPublished ? 'Unpublish this item?' : 'Publish this item'}</DialogTitle>
			<DialogContent>
				<DialogContentText id='alert-dialog-slide-description'>
					Let Google help apps determine location. This means sending anonymous location data to
					Google, even when no apps are running.
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} color='primary'>
					Cancel
				</Button>
				<Button onClick={handleCloseDelete} color='primary'>
					{ props.isPublished ? 'Unpublish' : 'Publish'}
				</Button>
			</DialogActions>
		</Dialog>
  );
}

export default ConfirmTogglePublishDialog;
