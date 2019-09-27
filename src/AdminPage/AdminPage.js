import React, { useGlobal, useEffect } from 'reactn';
import { Route, Switch, withRouter } from 'react-router-dom';

import UsersPage from './UsersPage/UsersPage';
import CategoriesPage from './CategoriesPage/CategoriesPage';
import PostsPage from './PostsPage/PostsPage';
import UserEditPage from './UsersPage/UserEditPage';
import Wrapper from './Wrapper';

const Welcome = () => 'Welcome to Andromeda AP!';

const Edit = () => <UserEditPage method='PATCH' />

const AdminPage = (props) => {

	const [currentUser] = useGlobal('currentUser');
	const [pageTitle, setPageTitle] = useGlobal('pageTitle');

	useEffect(() => { setPageTitle('Dashboard'); }, []);

	return (
		<Wrapper title={pageTitle}>
			<Switch>
				{ currentUser.roles.some(role => role.name === 'ADMIN') ?
						<Route path={`${props.match.path}users`} component={UsersPage} /> : null
				}
				{ currentUser.roles.some(role => role.name === 'ADMIN') ?
						<Route path={`${props.match.path}categories`} component={CategoriesPage} /> : null
				}
				<Route path={`${props.match.path}currentUser`} component={Edit} />
				<Route path={`${props.match.path}posts`} component={PostsPage} />
				<Route exact path={props.match.path} component={Welcome} />
			</Switch>
		</Wrapper>
	);
}

export default withRouter(AdminPage);
