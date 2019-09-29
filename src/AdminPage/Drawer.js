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
import CommentIcon from '@material-ui/icons/Comment';
import GalleryIcon from '@material-ui/icons/Photo';
import TagIcon from '@material-ui/icons/LocalOffer';
import HomeIcon from '@material-ui/icons/Home';
import SupportIcon from '@material-ui/icons/ContactSupport';
import FAQIcon from '@material-ui/icons/QuestionAnswer';
import ContactIcon from '@material-ui/icons/ContactMail';
import ProductIcon from '@material-ui/icons/DevicesOther';

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
					YourCompany
				</Typography>
			</div>
			<Divider />
			<List dense>
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
			<List dense subheader={
					<ListSubheader component='div'>
						Pages
					</ListSubheader>
			}>
				<ListItem
						button
						key={'drawer-home'}
						onClick={() => props.history.push('/')}>
					<ListItemIcon>
						<HomeIcon />
					</ListItemIcon>
					<ListItemText primary={'Home'} />
				</ListItem>
				<ListItem
						button
						key={'drawer-products'}
						onClick={() => props.history.push('/')}>
					<ListItemIcon>
						<ProductIcon />
					</ListItemIcon>
					<ListItemText primary={'Products'} />
				</ListItem>
				<ListItem
						button
						key={'drawer-contact'}
						onClick={() => props.history.push('/')}>
					<ListItemIcon>
						<ContactIcon />
					</ListItemIcon>
					<ListItemText primary={'Contact'} />
				</ListItem>
				<ListItem
						button
						key={'drawer-faqs'}
						onClick={() => props.history.push('/')}>
					<ListItemIcon>
						<FAQIcon />
					</ListItemIcon>
					<ListItemText primary={'FAQs'} />
				</ListItem>
				<ListItem
						button
						key={'drawer-support'}
						onClick={() => props.history.push('/')}>
					<ListItemIcon>
						<SupportIcon />
					</ListItemIcon>
					<ListItemText primary={'Support'} />
				</ListItem>
			</List>
			<Divider />
			<List dense subheader={
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
				<ListItem
						button
						key={'drawer-categories'}
						onClick={() => props.history.push('/categories')}>
					<ListItemIcon>
						<CategoryIcon />
					</ListItemIcon>
					<ListItemText primary={'Categories'} />
				</ListItem>
				<ListItem button key={'drawer-tags'}>
					<ListItemIcon>
						<TagIcon />
					</ListItemIcon>
					<ListItemText primary={'Tags'} />
				</ListItem>
				<ListItem button key={'drawer-gallery'}>
					<ListItemIcon>
						<GalleryIcon />
					</ListItemIcon>
					<ListItemText primary={'Gallery'} />
				</ListItem>
				<ListItem button key={'drawer-comments'}>
					<ListItemIcon>
						<CommentIcon />
					</ListItemIcon>
					<ListItemText primary={'Comments'} />
				</ListItem>
			</List>
			<Divider />
			<List dense subheader={
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
				<ListItem button key={'drawer-filemanager'}>
					<ListItemIcon>
						<CloudUploadIcon />
					</ListItemIcon>
					<ListItemText primary={'File Manager'} />
				</ListItem>
				<ListItem button key={'drawer-settings'}>
					<ListItemIcon>
						<SettingsApplicationsIcon />
					</ListItemIcon>
					<ListItemText primary={'Site Settings'} />
				</ListItem>
				<ListItem button key={'drawer-faq'}>
					<ListItemIcon>
						<HelpIcon />
					</ListItemIcon>
					<ListItemText primary={'Help & FAQs'} />
				</ListItem>
			</List>
    </>
  );
}

export default withRouter(ResponsiveDrawer);
