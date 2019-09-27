import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import UserItem from './UserItem';

const useStyles = makeStyles(theme => ({
	paper: {
		padding: theme.spacing(1),
	},
	container: {
		marginTop: theme.spacing(1),
	},
	noResultsContainer: {
		marginTop: theme.spacing(16),
	}
}));

const UsersTable = props => {

  const classes = useStyles();

	return (
		<Grid container spacing={2} className={classes.container}>
			{ props.data.length > 0 ?
				props.data.map((user, index) => (
					<Grid item xs={12} lg={6} xl={4} key={`user-item-${index}`}>
						<UserItem
							itemId={user.id}
							fullname={user.fullname}
							email={user.email}
							description={user.description}
							data={props.data}
							setData={props.setData}
						/>
					</Grid>
				)) :
				<Grid item xs className={classes.noResultsContainer}>
					<Typography align='center'>
						There are no items to show!
					</Typography>
				</Grid> }
		</Grid>
	)
}

export default UsersTable;
