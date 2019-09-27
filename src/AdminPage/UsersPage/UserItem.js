import React from 'react';
import { withRouter } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

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
			<Grid container spacing={1}>

				<Grid container item spacing={1}
						direction='row'
						alignItems='center'>
					<Grid item>
						<Avatar />
					</Grid>
					<Grid item xs>
						<Typography variant='h6' component='div'>
							{ props.fullname }
						</Typography>
						<Typography variant='body1' component='div'>
							<Link href={`mailto:${props.email}`}>
								{ props.email }
							</Link>
						</Typography>
					</Grid>
					<Grid item>
						<EditItemButton
							page='users'
							itemId={props.itemId}
						/>
					</Grid>
					<Grid item>
						<DeleteItemButton
							data={props.data}
							itemId={props.itemId}
							setData={props.setData}
							confirmAction={true}
							target='user'
						/>
					</Grid>
				</Grid>

				<Grid item>
					<Typography variant='body2' component='div'>
						<Box fontStyle='italic'>
							{ props.description }
						</Box>
					</Typography>
				</Grid>

			</Grid>
		</Paper>
	);
}

export default withRouter(UsersPage);
