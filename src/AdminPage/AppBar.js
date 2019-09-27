import React from 'react';

import CurrentUserInfo from './CurrentUserInfo';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import MenuIcon from '@material-ui/icons/Menu';

const ResponsiveAppBar = (props) => {

	const useStyles = makeStyles(theme => ({

		appBar: {
			marginLeft: props.drawerWidth,
			[theme.breakpoints.up('sm')]: {
				width: `calc(100% - ${props.drawerWidth}px)`,
			},
		},

		menuButton: {
			marginRight: theme.spacing(2),
			[theme.breakpoints.up('sm')]: {
				display: 'none',
			},
		},

		title: {
			flexGrow: 1,
		},

	}));

  const classes = useStyles();

  return (
		<AppBar position='fixed' className={classes.appBar}>
			<Toolbar>

				<IconButton
					color='inherit'
					aria-label='Open drawer'
					edge='start'
					onClick={props.handleDrawerToggle}
					className={classes.menuButton}
				>
					<MenuIcon />
				</IconButton>

				<Typography variant='h6' className={classes.title} noWrap>
					{ props.title }
				</Typography>

				<CurrentUserInfo />

			</Toolbar>
		</AppBar>
  );
}

export default ResponsiveAppBar;
