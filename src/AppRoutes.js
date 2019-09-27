import React, { useGlobal } from 'reactn';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import AdminPage from './AdminPage/AdminPage';
import LoginPage from './LoginPage/LoginPage';

const AdminRoute = authenticated => {
	if(authenticated)
	{
		return (
			<AdminPage />
		);
	}else{
		return (
			<Redirect to='/login' />
		);
	}
}

const LoginRoute = authenticated => {
	if(authenticated)
	{
		return (
			<Redirect to='/' />
		);
	}else{
		return (
			<LoginPage />
		);
	}
}

const AppRoutes = props => {

	const [currentUser] = useGlobal('currentUser');

	return (
		<BrowserRouter>
			<Switch>
				<Route
					path='/login'
					component={() => LoginRoute(currentUser.authenticated)}
				/>
				<Route
					path='/'
					component={() => AdminRoute(currentUser.authenticated)}
				/>
			</Switch>
		</BrowserRouter>
	);
}

export default AppRoutes;
