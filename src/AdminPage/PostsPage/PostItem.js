import React from 'react';
import { withRouter } from 'react-router-dom';

import moment from 'moment';

import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import EditItemButton from '../ItemActions/EditItemButton';
import DeleteItemButton from '../ItemActions/DeleteItemButton';
import TogglePublishButton from '../ItemActions/TogglePublishButton';

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

					<Grid item xs>
						<Typography variant='h6'>
							{ props.post.title }
						</Typography>
					</Grid>

					<Grid item>
						<TogglePublishButton
							isPublished={props.post.is_published}
							itemId={props.post.id}
							data={props.data}
							setData={props.setData}
						/>
					</Grid>

					<Grid item>
						<EditItemButton
							page='posts'
							itemId={props.post.id}
						/>
					</Grid>

					<Grid item>
						<DeleteItemButton
							data={props.data}
							itemId={props.post.id}
							setData={props.setData}
							confirmAction={true}
							target='post'
						/>
					</Grid>

				</Grid>

				<Grid item xs={12}>
					<Typography variant='body1'>
						{ props.post.description }
					</Typography>
				</Grid>

				<Grid item>
					<Typography variant='body2'>
						By {' '}
						<Link href={`/users/${props.post.author.id}`}>
							{ props.post.author.fullname }
						</Link>
						{' '} in {' '}
						<Link href={`/categories/${props.post.category.id}`}>
							{ props.post.category.name }
						</Link>
						{' '} on {' ' + moment(props.post.date).format('MM/DD/YYYY')} at {moment(props.post.date).format('HH:mm')}
					</Typography>
				</Grid>

			</Grid>
		</Paper>
	);
}

export default withRouter(UsersPage);
