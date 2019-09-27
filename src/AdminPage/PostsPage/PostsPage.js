import React, { useGlobal, useEffect } from 'reactn';
import { Switch, Route, withRouter } from 'react-router-dom';

import TableTemplate from '../TableTemplate/TableTemplate';
import PostsTable from './PostsTable';
import PostEditPage from './PostEditPage';
import AddItemButton from '../ItemActions/AddItemButton';

const Table = () => (
	<>
		<TableTemplate target='post' ItemTable={PostsTable} />
		<AddItemButton path='posts' />
	</>
);

const Edit = () => <PostEditPage method='PATCH' />
const Create = () => <PostEditPage method='POST' />

const PostsPage = (props) => {

	const [pageTitle, setPageTitle] = useGlobal('pageTitle');

	useEffect(() => { setPageTitle('Posts'); }, []);

	return (
		<Switch>
			<Route exact path={`${props.match.path}`} component={Table} />
			<Route path={`${props.match.path}/new`} component={Create} />
			<Route path={`${props.match.path}/:postId`} component={Edit} />
		</Switch>
	);
}

export default withRouter(PostsPage);
