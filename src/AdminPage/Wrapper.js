import React, { useState } from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';

import AppBar from './AppBar';
import ResponsiveDrawer from './Drawer';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    [theme.breakpoints.up('xs')]: {
			padding: theme.spacing(3),
		},
    [theme.breakpoints.down('xs')]: {
			padding: theme.spacing(2),
		},
  },
}));

const Wrapper = (props) => {

  const classes = useStyles();
  const theme = useTheme();

  const { container } = props;

  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  }

  return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				drawerWidth={drawerWidth}
				handleDrawerToggle={handleDrawerToggle}
				title={props.title}
			/>
			<nav className={classes.drawer}>
				<Hidden smUp implementation='css'>
					<Drawer
						container={container}
						variant='temporary'
						anchor={theme.direction === 'rtl' ? 'right' : 'left'}
						open={mobileDrawerOpen}
						onClose={handleDrawerToggle}
						classes={{
							paper: classes.drawerPaper,
						}}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
					>
						<ResponsiveDrawer drawerWidth={drawerWidth} />
					</Drawer>
				</Hidden>
				<Hidden xsDown implementation='css'>
					<Drawer
						classes={{
							paper: classes.drawerPaper,
						}}
						variant='permanent'
						open
					>
						<ResponsiveDrawer drawerWidth={drawerWidth} />
					</Drawer>
				</Hidden>
			</nav>
			<main className={classes.content}>
				<div className={classes.toolbar} />
				{ props.children }
			</main>
		</div>
  );
}

export default Wrapper;
