import React, { useGlobal, useEffect } from 'reactn';
import { Switch, Route, withRouter } from 'react-router-dom';

import UsersTable from './UsersTable';
import TableTemplate from '../TableTemplate/TableTemplate';
import UserEditPage from './UserEditPage';
import AddItemButton from '../ItemActions/AddItemButton';

const Table = () => (
	<>
		<TableTemplate target='user' ItemTable={UsersTable} />
		<AddItemButton path='users' />
	</>
);

const Create = () => <UserEditPage method='POST' />
const Edit = () => <UserEditPage method='PATCH' />

const UsersPage = ({match, history}) => {

	const [pageTitle, setPageTitle] = useGlobal('pageTitle');

	useEffect(() => { setPageTitle('Users'); }, []);

	return (
		<Switch>
			<Route exact path={`${match.path}`} component={Table} />
			<Route path={`${match.path}/new`} component={Create} />
			<Route path={`${match.path}/:userId`} component={Edit} />
		</Switch>
	);
}

export default withRouter(UsersPage);
