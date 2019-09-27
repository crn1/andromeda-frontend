import React from 'react';
import { withRouter } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import EditItemButton from '../ItemActions/EditItemButton';
import DeleteItemButton from '../ItemActions/DeleteItemButton';

const useStyles = makeStyles(theme => ({
	paper: {
		padding: theme.spacing(1),
		paddingLeft: theme.spacing(2),
	},
}));

const UsersPage = (props) => {

  const classes = useStyles();

	return (
		<Paper className={classes.paper}>
			<Grid container alignItems='center' spacing={1}>

				<Grid item xs>
					<Typography variant='h6'>
						{ props.name }
					</Typography>
				</Grid>

				<Grid item>
					<EditItemButton
						page='categories'
						itemId={props.itemId}
					/>
				</Grid>

				<Grid item>
					<DeleteItemButton
						data={props.data}
						itemId={props.itemId}
						setData={props.setData}
						confirmAction={true}
						target='category'
					/>
				</Grid>

			</Grid>
		</Paper>
	);
}

export default withRouter(UsersPage);
