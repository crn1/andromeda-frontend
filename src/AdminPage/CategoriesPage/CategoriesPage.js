import React, { useGlobal, useEffect } from 'reactn';
import { Switch, Route, withRouter } from 'react-router-dom';

import TableTemplate from '../TableTemplate/TableTemplate';
import CategoriesTable from './CategoriesTable';
import CategoryEditPage from './CategoryEditPage';
import AddItemButton from '../ItemActions/AddItemButton';

const Table = () => (
	<>
		<TableTemplate target='category' ItemTable={CategoriesTable} />
		<AddItemButton path='categories' />
	</>
);

const Edit = () => <CategoryEditPage method='PATCH' />
const Create = () => <CategoryEditPage method='POST' />

const CategoriesPage = (props) => {

	const [pageTitle, setPageTitle] = useGlobal('pageTitle');

	useEffect(() => { setPageTitle('Categories'); }, []);

	return (
		<Switch>
			<Route exact path={`${props.match.path}`} component={Table} />
			<Route path={`${props.match.path}/new`} component={Create} />
			<Route path={`${props.match.path}/:categoryId`} component={Edit} />
		</Switch>
	);
}

export default withRouter(CategoriesPage);
