import React, { useState, useEffect, createElement } from 'react';
import { withRouter } from 'react-router-dom';

import qs from 'query-string';

import Grid from '@material-ui/core/Grid';

import Filters from './Filters';

const SearchItemsEngine = (props) => {

	const [search, setSearch] = useState(qs.parse(props.location.search).search);
	const [perPage, setPerPage] = useState(qs.parse(props.location.search).limit);
	const [orderBy, setOrderBy] = useState(qs.parse(props.location.search).order_by);
	const [page, setPage] = useState(qs.parse(props.location.search).page);
	const [tags, setTags] = useState(qs.stringify({
		search: search,
		limit: perPage,
		order_by: orderBy,
		page: page,
	}));

	const getData = () => {
	}

	const [data, setData] = useState([]);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		switch(props.target)
		{
			case 'post':
				setData([
					{
						title: 'Sample Title 1',
						author: {
							id: 1,
							fullname: 'John Smith',
						},
						category: {
							id: 1,
							name: 'Sample Category',
						},
						description: 'This is description of post.',
					},
					{
						title: 'Sample Title 2',
						author: {
							id: 1,
							fullname: 'John Smith',
						},
						category: {
							id: 1,
							name: 'Sample Category',
						},
						description: 'This is description of post.',
					},
				]);
				break;
			case 'category':
				setData([
					{
						id: 1,
						name: 'Sample Category 1',
					},
					{
						id: 2,
						name: 'Sample Category 2',
					},
					{
						id: 3,
						name: 'Sample Category 3',
					},
					{
						id: 4,
						name: 'Sample Category 4',
					},
				]);
				break;
			case 'user':
				setData([
					{
						id: 1,
						fullname: 'John Smith',
						email: 'john@yourcompany.com',
						description: 'This is description of John. He is very nice fella.',
					},
					{
						id: 1,
						fullname: 'Fred Bloggs',
						email: 'john@yourcompany.com',
						description: 'This is description of Fred. He is very charismatic fella.',
					},
					{
						id: 1,
						fullname: 'Marry Doe',
						email: 'john@yourcompany.com',
						description: 'This is description of Jane. She is very smart gal.',
					},
				]);
		}
	}, []);

	useEffect(() => {
		setTags(qs.stringify({
			search: search,
			limit: perPage,
			order_by: orderBy,
			page: page,
		}));
	}, [search, perPage, orderBy, page]);

	useEffect(() => {
		props.history.push({
			search: tags,
		});
		getData();
	}, [tags]);

	useEffect(() => {
		if(data && page)
		{
			if(data.length == 0 && page > 1)
			{
				setPage(page - 1);
			}
		}
	}, [data])

	return (
		<Grid container
				spacing={2}
		>
			<Grid item xs={12}>
				<Filters
					search={search}
					setSearch={setSearch}

					perPage={perPage}
					setPerPage={setPerPage}

					orderBy={orderBy}
					setOrderBy={setOrderBy}

					page={page}
					setPage={setPage}

					total={total}
				/>
			</Grid>
			<Grid item xs={12}>
				{ createElement(props.ItemTable, {data: data, setData: setData}) }
			</Grid>
		</Grid>
	);
}

export default withRouter(SearchItemsEngine);
