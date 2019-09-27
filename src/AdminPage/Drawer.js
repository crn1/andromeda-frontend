import React, { useGlobal } from 'reactn';
import { withRouter } from 'react-router-dom';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import ReceiptIcon from '@material-ui/icons/Receipt';
import CategoryIcon from '@material-ui/icons/Category';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import HelpIcon from '@material-ui/icons/Help';

const useStyles = makeStyles(theme => ({
	toolbar: theme.mixins.toolbar,
	title: {
		display: 'flex',
		paddingLeft: theme.spacing(2),
		alignItems: 'center',
	}
}));

const ResponsiveDrawer = (props) => {

  const classes = useStyles();

	const [currentUser] = useGlobal('currentUser');

  return (
    <>
      <div className={clsx(classes.toolbar, classes.title)}>
				<Typography component='div' variant='h6'>
					Andromeda AP
				</Typography>
			</div>
			<Divider />
			<List>
				<ListItem
						button
						key={'drawer-dashboard'}
						onClick={() => props.history.push('/')}>
					<ListItemIcon>
						<DashboardIcon />
					</ListItemIcon>
					<ListItemText primary={'Dashboard'} />
				</ListItem>
			</List>
			<Divider />
			<List subheader={
				<ListSubheader component='div'>
					Blog
				</ListSubheader>
			}>
				<ListItem
						button
						key={'drawer-posts'}
						onClick={() => props.history.push('/posts')}>
					<ListItemIcon>
						<ReceiptIcon />
					</ListItemIcon>
					<ListItemText primary={'Posts'} />
				</ListItem>
				{ currentUser.roles.some(e => e.name === 'ADMIN') ?
					<ListItem
							button
							key={'drawer-categories'}
							onClick={() => props.history.push('/categories')}>
						<ListItemIcon>
							<CategoryIcon />
						</ListItemIcon>
						<ListItemText primary={'Categories'} />
					</ListItem> : null
				}
			</List>
			{ currentUser.roles.some(e => e.name === 'ADMIN') ?
				<>
					<Divider />
					<List subheader={
							<ListSubheader component='div'>
								Misc
							</ListSubheader>
					}>
						<ListItem
								button
								key={'drawer-users'}
								onClick={() => props.history.push('/users')}
						>
							<ListItemIcon>
								<PersonIcon />
							</ListItemIcon>
							<ListItemText primary={'Users'} />
						</ListItem>
						<ListItem disabled button key={'drawer-filemanager'}>
							<ListItemIcon>
								<CloudUploadIcon />
							</ListItemIcon>
							<ListItemText primary={'File Manager'} />
						</ListItem>
						<ListItem disabled button key={'drawer-settings'}>
							<ListItemIcon>
								<SettingsApplicationsIcon />
							</ListItemIcon>
							<ListItemText primary={'Site settings'} />
						</ListItem>
						<ListItem disabled button key={'drawer-faq'}>
							<ListItemIcon>
								<HelpIcon />
							</ListItemIcon>
							<ListItemText primary={'FAQ'} />
						</ListItem>
					</List>
				</> : null
			}
    </>
  );
}

export default withRouter(ResponsiveDrawer);
